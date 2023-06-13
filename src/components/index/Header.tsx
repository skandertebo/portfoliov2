import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="flex flex-col">
      <h1 class="text-6xl text-white font-bold" id="header-title">
        Skander Tebourbi
      </h1>
      <KeyboardInsertedAnimation
        values={[
          'Software Engineering student.',
          'Full Stack Developer.',
          'Game developer.',
          'Machine Learning Enthusiast.'
        ]}
      />
    </header>
  );
});

const KeyboardInsertedAnimation = component$(
  ({ values }: { values: string[] }) => {
    if (values.length === 0) {
      throw new Error('Invalid number of values');
    }
    const currentValue = useSignal(0);
    const currentMaxChar = useSignal(0);
    const isDescreasing = useSignal(false);
    useVisibleTask$(({ track }) => {
      track(() => currentMaxChar.value);
      let timeoutSpeed: number = 100;
      if (
        currentMaxChar.value > values[currentValue.value].length ||
        currentMaxChar.value === 0
      ) {
        timeoutSpeed = 1000;
      } else if (isDescreasing.value) {
        timeoutSpeed = 50;
      }
      const timeout = setTimeout(() => {
        if (
          currentMaxChar.value <= values[currentValue.value].length &&
          isDescreasing.value === false
        ) {
          currentMaxChar.value = currentMaxChar.value + 1;
        } else {
          if (isDescreasing.value) {
            if (currentMaxChar.value === 0) {
              isDescreasing.value = false;
              currentValue.value = (currentValue.value + 1) % values.length;
              currentMaxChar.value = currentMaxChar.value + 1;
            } else {
              currentMaxChar.value = currentMaxChar.value - 1;
            }
          } else {
            isDescreasing.value = true;
            currentMaxChar.value = currentMaxChar.value - 1;
          }
        }
      }, timeoutSpeed);
      return () => {
        clearTimeout(timeout);
      };
    });

    return (
      <h2 class="text-2xl text-white min-h-[32px]">
        {values[currentValue.value].slice(0, currentMaxChar.value)}
      </h2>
    );
  }
);
