import { component$, useStylesScoped$ } from '@builder.io/qwik';
import experiences from './experience.json';
import ExperienceItem from '~/components/experience/ExperienceItem';
import ScrollCSS from '../../assets/scrollbar.css?inline';

export default component$(() => {
  useStylesScoped$(ScrollCSS);
  return (
    <div class="flex flex-col gap-4 p-8 bg-gray-800 bg-opacity-30 rounded-lg shadow-2xl">
      <header class="text-white text-4xl font-semibold">Experience:</header>
      <main class="flex flex-col gap-4 pe-2 overflow-y-auto max-h-[80vh] styled-scrollbar shadow-2xl">
        {experiences.map((experience, idx) => (
          <ExperienceItem experience={experience} key={idx} />
        ))}
      </main>
    </div>
  );
});
