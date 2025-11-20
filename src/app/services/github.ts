// github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  
  private token = environment.token;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Accept': 'application/vnd.github.v3+json'
    });
    
    if (this.token) {
      headers = headers.set('Authorization', `token ${this.token}`);
    }
    
    return headers;
  }

  // Récupérer les informations de l'utilisateur (avec cache)
  private userInfoCache = new Map<string, Observable<GitHubUser>>();
  
  getUserInfo(username: string): Observable<GitHubUser> {
    if (!this.userInfoCache.has(username)) {
      const request = this.http.get<GitHubUser>(
        `${this.apiUrl}/users/${username}`,
        { headers: this.getHeaders() }
      ).pipe(
        shareReplay(1),
        catchError(error => throwError(() => 'Erreur lors du chargement des données utilisateur'))
      );
      this.userInfoCache.set(username, request);
    }
    return this.userInfoCache.get(username)!;
  }

  // Récupérer tous les dépôts publics (avec cache)
  private reposCache = new Map<string, Observable<GitHubRepo[]>>();
  
  getPublicRepos(username: string): Observable<GitHubRepo[]> {
    if (!this.reposCache.has(username)) {
      const request = this.http.get<GitHubRepo[]>(
        `${this.apiUrl}/users/${username}/repos?type=public&sort=updated&per_page=100`,
        { headers: this.getHeaders() }
      ).pipe(
        shareReplay(1),
        catchError(error => throwError(() => 'Erreur lors du chargement des dépôts'))
      );
      this.reposCache.set(username, request);
    }
    return this.reposCache.get(username)!;
  }

  // NOUVEAU: Récupérer toutes les données en parallèle
  getAllUserData(username: string): Observable<{ user: GitHubUser; repos: GitHubRepo[] }> {
    return forkJoin({
      user: this.getUserInfo(username),
      repos: this.getPublicRepos(username)
    }).pipe(
      catchError(error => throwError(() => 'Erreur lors du chargement des données GitHub'))
    );
  }

  // Récupérer les statistiques des dépôts
  getRepoStats(username: string, repoName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/repos/${username}/${repoName}`,
      { headers: this.getHeaders() }
    );
  }

  // Récupérer les langages utilisés dans un dépôt
  getRepoLanguages(username: string, repoName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/repos/${username}/${repoName}/languages`,
      { headers: this.getHeaders() }
    );
  }

  // Récupérer les commits récents
  getRecentCommits(username: string, repoName: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/repos/${username}/${repoName}/commits?per_page=10`,
      { headers: this.getHeaders() }
    );
  }
}