import { component$ } from '@builder.io/qwik';

export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description?: string[];
};

export default component$<{
  experience: Experience;
}>(({ experience }) => {
  return (
    <div class="bg-primary bg-opacity-90 rounded-lg shadow-2xl p-8 flex flex-col w-full max-w-[800px]">
      <h1 class="text-2xl font-bold text-white">{experience.role}</h1>
      <h2 class="text-xl text-white">{experience.company}</h2>
      <span class="flex flex-col mt-2">
        <h3 class="text-md font-thin text-white">
          Location: {experience.location}
        </h3>
        <h3 class="text-md font-thin text-white">{experience.duration}</h3>
      </span>
      {experience.description && (
        <ul class="mt-4 flex flex-col gap-2 m-0 p-0">
          {experience.description.map((bullet, idx) => (
            <li key={idx} class="list-disc m-0 p-0 text-white">
              <p class="text-white text-md font-thin font-roboto tracking-wide">
                {bullet}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
