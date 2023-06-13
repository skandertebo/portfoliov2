import { component$, useSignal, useStylesScoped$, $ } from '@builder.io/qwik';
import paragraphs from './paragraphs.json';
import CSS from './index.css?inline';
import {
  HiChevronUpOutline,
  HiChevronDownOutline
} from '@qwikest/icons/heroicons';

export default component$(() => {
  const currentAnimation = useSignal('fade-in');

  useStylesScoped$(CSS);
  const currentParagraph = useSignal<number>(0);

  const slideParagraph = $((direction: 'up' | 'down') => {
    currentAnimation.value = 'fade-out';
    setTimeout(() => {
      currentAnimation.value = 'fade-in';
      if (direction === 'up') {
        currentParagraph.value = currentParagraph.value - 1;
      } else {
        currentParagraph.value = currentParagraph.value + 1;
      }
    }, 450);
  });
  return (
    <div class="flex flex-col gap-4 p-12 shadow-2xl rounded-lg bg-gray-800 bg-opacity-40 mx-auto w-[85vw] md:w-[70vw]">
      <h1 class="text-5xl font-bold text-white">About:</h1>
      <div class="flex flex-col styled-scrollbar w-full min-h-[256px]">
        {currentParagraph.value > 0 ? (
          <button class="m-0 p-0" onClick$={() => slideParagraph('up')}>
            <HiChevronUpOutline class="w-16 h-16 shadow-lg text-slate-200 mx-auto mb-4 hover:scale-110 hover:text-slate-700 transition-all" />
          </button>
        ) : (
          <span class="h-16 mb-4"></span>
        )}
        <p
          class={
            'text-lg xs:text-xl md:text-2xl text-white break-words w-full flex flex-wrap p-0 ' +
            currentAnimation.value
          }
        >
          {paragraphs[currentParagraph.value]}
        </p>
        {currentParagraph.value < paragraphs.length - 1 ? (
          <button class="m-0 p-0" onClick$={() => slideParagraph('down')}>
            <HiChevronDownOutline class="w-16 h-16 shadow-lg text-slate-200 mx-auto mt-4 hover:scale-110 hover:text-slate-700 transition-all" />
          </button>
        ) : (
          <span class="h-16 mt-4"></span>
        )}
      </div>
    </div>
  );
});
