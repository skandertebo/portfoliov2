import { component$, useStylesScoped$ } from '@builder.io/qwik';
import githubLogo from '../../assets/images/github-mark-white.svg';
import scrollbarCSS from '../../assets/scrollbar.css?inline';
export type ProjectItemProps = {
  project: Project;
};

export type Project = {
  name: string;
  description: string;
  duration: string;
  github?: string;
  preview?: string;
};

export default component$<ProjectItemProps>(({ project }) => {
  useStylesScoped$(scrollbarCSS);
  return (
    <div class="bg-primary bg-opacity-80 py-6 px-12 text-white rounded-lg shadow-2xl sm:w-[300px] md:w-[400px] lg:w-[450px] break-words">
      <h1 class="text-2xl font-roboto tracking-wide first-letter:uppercase">
        {project.name}
      </h1>
      <p class="text-md mt-2 text-slate-100 font-thin font-roboto tracking-wide">
        {project.description}
      </p>
      <p class="text-sm mt-1 font-roboto font-thin text-slate-100">
        {project.duration}
      </p>
      <div class="flex flex-row items-center gap-2 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs font-roboto text-slate-100 hover:text-slate-200 transition-all hover:scale-110"
          >
            <img src={githubLogo} alt="Link to github" class="w-5 h-5" />
          </a>
        )}
        {project.github && project.preview && <span>&nbsp;|&nbsp;</span>}
        {project.preview && (
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            class="text-md underline font-roboto text-slate-100 hover:text-slate-200 transition-all p-0 m-0 hover:scale-110"
          >
            <span>Preview</span>
          </a>
        )}
      </div>
    </div>
  );
});
