interface Project {
  id: number;
  title: string;
  stacks: ProjectStack;
  description: string;
  repoLink: string;
  liveLink: string;
  demoLink: string;
  thumbnail: string;
  cssWrapper: string;
  cssWrapperSm: string;
  cssDesc: string;
  cssBtn: string;
  cssUnderline: string;
}

interface ProjectStack {
  FE: ProjectTechs[];
  BC: ProjectTechs[];
  BE: ProjectTechs[];
  Mobile: ProjectTechs[];
}

interface Technology {
  technology: string;
  value?: number;
  techLink: string;
  shouldShake: boolean;
}
