import type { ProjectDescription } from '@/domain/types/Project/ProjectDescription';
import type { ProjectTitle } from '@/domain/types/Project/ProjectTitle';
import type { Technology } from '@/domain/types/Project/Technology';
import type { Url } from '@/domain/types/Utils/Url';

export type Project = {
  id: number,
  title: ProjectTitle,
  description: ProjectDescription,
  technos: Technology[],
  image: Url,
  github?: Url,
  demo?: Url,
}
