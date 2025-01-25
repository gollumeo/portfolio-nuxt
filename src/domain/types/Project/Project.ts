import type { ProjectDescription } from '@/domain/types/Project/ProjectDescription';
import type { ProjectTitle } from '@/domain/types/Project/ProjectTitle';
import type { Url } from '@/domain/types/Utils/Url';

export type Project = {
  id: number,
  title: ProjectTitle,
  description: ProjectDescription,
  technos: Array<string>,
  image: Url,
  github?: Url,
  demo?: Url,
}
