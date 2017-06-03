type Repository = {
  'clone_url': string,
  'created_at': string,
  'default_branch': string,
  'description': string,
  'fork': boolean,
  'forks': number,
  'forks_count': number,
  'full_name': string,
  'has_downloads': boolean,
  'has_issues': boolean,
  'has_pages': boolean,
  'has_projects': boolean,
  'has_wiki': boolean,
  'homepage': string,
  'html_url': string,
  'id': number,
  'language': string,
  'name': string,
  'open_issues': number,
  'open_issues_count': number,
  'owner': RepoOwner,
  'private': boolean,
  'pushed_at': string,
  'score': number,
  'size': number,
  'ssh_url': string,
  'stargazers_count': number,
  'watchers': number,
  'watchers_count': number
};

type RepoOwner = {
  avatar_url: string,
  gravatar_id: string,
  html_url: string,
  id: number,
  login: string,
  site_admin: boolean,
  'type': string
};

