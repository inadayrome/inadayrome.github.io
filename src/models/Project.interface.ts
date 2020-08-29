export interface Project {
  title: string;
  codeURL: string; // link to code for given project
  demoURL: string; // link to demo page, if any
  previewImage: () => JSX.Element | null; // query to image
  description: string;
}
