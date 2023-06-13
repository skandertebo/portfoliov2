import { component$, useStylesScoped$ } from '@builder.io/qwik';
import skills from './skills.json';
import { HiStarSolid } from '@qwikest/icons/heroicons';
import scrollCSS from '~/assets/scrollbar.css?inline';
import CSS from './index.css?inline';
export default component$(() => {
  useStylesScoped$(scrollCSS);
  useStylesScoped$(CSS);
  return (
    <div class="flex flex-col gap-4 py-8 px-8 md:px-20 bg-gray-800 bg-opacity-30 rounded-lg max-h-[80vh] shadow-2xl mx-auto text-white ">
      <header class="text-white font-roboto text-6xl font-semibold mb-4">
        Skills:
      </header>
      <main class="styled-scrollbar overflow-y-auto p-2">
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-8 skills-wrapper p-0 m-0">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              class="skill-item flex gap-4 m-0 list-none py-2 px-6 w-52 items-center bg-primary bg-opacity-90 rounded-lg shadow-2xl"
              style={{
                animationDuration: `${idx * 0.4 + 0.2}s`
              }}
            >
              <h1 class="text-white font-roboto text-xl tracking-wider w-[80%]">
                {skill.name}
              </h1>
              <HiStarSolid class="text-white h-6 w-6" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
});
