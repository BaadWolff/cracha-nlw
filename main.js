//variaveis: let ou const
const linksSocialMedia = {
  github: 'BaadWolff',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: '@maykbrito',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.htmk_url
      userPhoto.src = data.avatar_url
    })
}
getGitHubProfileInfos()
