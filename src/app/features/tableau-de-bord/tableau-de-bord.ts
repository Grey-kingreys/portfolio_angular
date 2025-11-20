import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService, GitHubUser, GitHubRepo } from '../../services/github';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau-de-bord.html',
  styleUrl: './tableau-de-bord.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableauDeBord implements OnInit {
  username = 'Grey-kingreys';
  userInfo: GitHubUser | null = null;
  repos: GitHubRepo[] = [];
  loading = false;
  error = '';

  // Statistiques calculées
  totalStars = 0;
  totalForks = 0;
  languages: { [key: string]: number } = {};

  constructor(
    private githubService: GithubService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.loadGitHubData();
  }

  loadGitHubData() {
    this.loading = true;
    this.error = '';

    // Utiliser la nouvelle méthode optimisée qui charge tout en parallèle
    this.githubService.getAllUserData(this.username)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.userInfo = data.user;
          this.repos = data.repos;
          this.calculateStats();
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erreur lors du chargement des données GitHub';
          this.loading = false;
          console.error(err);
        }
      });
  }

  calculateStats() {
    // Calculer le total des étoiles et forks
    this.totalStars = this.repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    this.totalForks = this.repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    // Calculer les langages utilisés
    this.languages = {};
    this.repos.forEach(repo => {
      if (repo.language) {
        this.languages[repo.language] = (this.languages[repo.language] || 0) + 1;
      }
    });
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

