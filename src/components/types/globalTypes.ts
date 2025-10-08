export type TService = {
  id: number;
  title: string;
  desc: string;
  image: string;
};
export type TSkill = {
  id: number;
  title: string;
  svgImage: string | React.FC<React.SVGProps<SVGSVGElement>>;
};

export type TEducation = {
  year: string;
  institute: string;
  topic: string;
};

export type TTestimonial = {
  id: string;
  image: string;
  desc: string;
  name: string;
  position: string;
  rating: number;
};
export type TBlog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type TProject = {
  _id: string;
  name: string;
  liveurl: string;
  frontendrepo: string;
  backendrepo: string;
  image: string;
  descriptions: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Tuser = {
  name: string;
  email: string;
  rol: string;
};
