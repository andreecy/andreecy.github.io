<script lang="ts">
  let progLangs = ["C#", "Java", "Javascript", "PHP", "Python"];
</script>

<div class="max-w-3xl mx-auto py-12 space-y-4">
  <div class="space-y-2">
    <p class="text-3xl font-bold">Andree Christian Yulianto</p>
    <p>I am a software engineer in Indonesia.</p>
  </div>
  <div>
    <a href="https://github.com/andreecy" target="_blank">Github</a>
    <a
      href="https://www.linkedin.com/in/andree-christian-yulianto-381378116"
      target="_blank">LinkedIn</a
    >
  </div>
  <div>
    <p>Mail</p>
    <div>
      <a href="mailto:andreechristianyulianto@gmail.com"
        >andreechristianyulianto@gmail.com</a
      >
    </div>
  </div>
  <div>
    <p>Ability</p>
    <div>
      <p>Programming Languanges</p>
      <div>{progLangs.sort().join(", ")}</div>
    </div>
  </div>
</div>

<style>
  a {
    text-decoration: underline;
    font-weight: 600;
  }
</style>
