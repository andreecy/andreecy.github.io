<script lang="ts">
  let progLangs = ["C#", "Go", "Java", "Javascript", "Typescript", "PHP" ];
  let frameworks = ["React", "Next.js", "Svelte", "Laravel", "Express" ];
</script>

<div class="max-w-3xl mx-auto py-8 px-8 space-y-4">
  <div class="space-y-2">
    <p class="text-3xl font-bold font-sans-serif">Andree Christian Yulianto</p>
    <p>I am a software engineer in Indonesia.</p>
  </div>
  <div class="flex space-x-1">
    <a href="https://github.com/andreecy" target="_blank">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
          fill="currentColor"
        />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/andree-christian-yulianto-381378116"
      target="_blank"
      ><svg width="24px" height="24px" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
        /></svg
      ></a
    >
  </div>
  <div>
    <p class="font-semibold text-lg">Mail</p>
    <div>
      <a href="mailto:andreechristianyulianto@gmail.com"
        >andreechristianyulianto@gmail.com</a
      >
    </div>
  </div>
  <div class="space-y-2">
    <p class="font-semibold text-lg">Skills</p>
    <div>
      <p>Programming Languanges</p>
      <div>{progLangs.sort().join(", ")}, etc.</div>
    </div>
    <div>
      <p>Frameworks</p>
      <div>{frameworks.sort().join(", ")}, etc.</div>
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: underline;
    font-weight: 600;
  }
</style>
