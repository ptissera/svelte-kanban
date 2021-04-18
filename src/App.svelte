<script>
import IssueBoard from "./components/board/IssueBoard.svelte";
import NavBar from "./components/NavBar.svelte";


</script>

<main>
  <h1>Kanban</h1>
  <NavBar/>
  <IssueBoard/>
</main>

<style>
  main {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 150;
  }
</style>
