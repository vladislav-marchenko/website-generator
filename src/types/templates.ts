export interface ClassicTemplate {
  menu: {
    projectName: string
    twitter: string
    telegram: string
  }
  images: {
    logo: string
    background: string
  }
}

export interface SimpleTemplate {
  projectInfo: {
    ticker: string
    contractAddress: string
    description: string
  }
  images: {
    logo: string
    background: string
  }
}
