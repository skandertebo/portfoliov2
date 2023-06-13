import ProjectItem from '~/components/projects/ProjectItem';
import projects from './projects.json';
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import scrollbarCSS from '~/assets/scrollbar.css?inline';

export default component$(() => {
  useStylesScoped$(scrollbarCSS);
  return (
    <div class="flex flex-col gap-4 p-8 bg-gray-800 bg-opacity-30 rounded-lg max-h-[80vh] shadow-2xl mx-auto">
      <header class="text-white text-6xl font-semibold mb-4">Projects:</header>
      <main class="flex justify-evenly flex-wrap m-4 p-4 gap-x-4 gap-y-6 overflow-y-auto max-h-[80vh] max-w-[90vw] lg:max-w-[80vw] styled-scrollbar">
        {projects.map((project, idx) => (
          <ProjectItem project={project} key={idx} />
        ))}
      </main>
    </div>
  );
});
