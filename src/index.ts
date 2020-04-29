import { GithubClient } from './client/github_client'

const main = async () => {
  const GITHUB_TOKEN = process.env['GITHUB_TOKEN'] || ''
  const OWNER = 'Kesin11'
  const REPO = 'Firestore-simple'
  const githubClient = new GithubClient(GITHUB_TOKEN)

  const runs = await githubClient.fetchWorkflows(OWNER, REPO)
  console.dir(runs)

  const jobs = await githubClient.fetchJobs(OWNER, REPO, runs[0].id)
  console.dir(jobs)
}
main()