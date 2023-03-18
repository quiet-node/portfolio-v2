interface Project {
  id: number;
  title: string;
  stacks: ProjectStack;
  description: string;
  repoLink: string;
  liveLink: string;
  thumbnail: string;
  bgColor: string[];
  textColor: string;
  descColor: string;
  btnColor: string;
}

interface ProjectStack {
  FE: ProjectTechs[];
  BC: ProjectTechs[];
  BE: ProjectTechs[];
}

interface Technology {
  technology: string;
  value?: number;
  techLink: string;
  shouldShake: boolean;
}
