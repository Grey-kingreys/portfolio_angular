import { Component, OnInit, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GitHubUser, GitHubRepo } from '../../services/github';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau-de-bord.html',
  styleUrl: './tableau-de-bord.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableauDeBord implements OnInit {
  private githubService = inject(GithubService);
  private destroyRef = inject(DestroyRef);

  username = 'Grey-kingreys';
  userInfo = signal<GitHubUser | null>(null);
  repos = signal<GitHubRepo[]>([]);
  loading = signal(false);
  error = signal('');

  // Statistiques calculées
  totalStars = signal(0);
  totalForks = signal(0);
  languages = signal<{ [key: string]: number }>({});

  ngOnInit() {
    this.loadGitHubData();
  }

  loadGitHubData() {
    this.loading.set(true);
    this.error.set('');

    // Utiliser la nouvelle méthode optimisée qui charge tout en parallèle
    this.githubService.getAllUserData(this.username)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.userInfo.set(data.user);
          this.repos.set(data.repos);
          this.calculateStats(data.repos);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Erreur lors du chargement des données GitHub');
          this.loading.set(false);
          console.error(err);
        }
      });
  }

  calculateStats(reposList: GitHubRepo[]) {
    // Calculer le total des étoiles et forks
    const stars = reposList.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const forks = reposList.reduce((sum, repo) => sum + repo.forks_count, 0);
    this.totalStars.set(stars);
    this.totalForks.set(forks);

    // Calculer les langages utilisés
    const langs: { [key: string]: number } = {};
    reposList.forEach(repo => {
      if (repo.language) {
        langs[repo.language] = (langs[repo.language] || 0) + 1;
      }
    });
    this.languages.set(langs);
  }

  // TrackBy functions pour optimiser les boucles
  trackRepo(index: number, repo: GitHubRepo): number {
    return repo.id;
  }

  trackLanguage(index: number, lang: [string, number]): string {
    return lang[0];
  }

  getTopLanguages(limit = 5): [string, number][] {
    return Object.entries(this.languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  }
}

