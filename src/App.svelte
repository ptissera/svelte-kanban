<script>
  import { each } from "svelte/internal";
import IssueCard from "./IssueCard.svelte";

  const columns = [
    {name: "backlog", cards: []},
    {name: "Started", cards: []},
    {name: "In Progress", cards: []},
    {name: "Blocked", cards: []},
    {name: "Code Review", cards: [{name: 'Problema con los estilos', description: ' problema para ver los border', status: 'code review', author: 'p Tissera', created: '2021-04-12', updated: '2021-04-12', comments: [], severity: 3}]},
    {name: "Testing", cards: []},
    {name: "Canceled", cards: []},
    {name: "Closed", cards: []},
  ];
</script>

<main>
  <h1>Kanban</h1>

  <div class="main-container">
    {#each columns as {name, cards}}
      <div class="column card bg-primary shadow-soft border-light">
        <span class="column-header">{name}</span>
        <div class="column-body">
			{#each cards as card}
		      <IssueCard {card}/>
			{/each}
		</div>
      </div>
    {/each}
  </div>
</main>
<style>

  .column-header {
	  font-weight: bold;
	  border-bottom: 1px solid var(--gray-500);
  }

  .column-body {
	height: calc(100vh - 10rem);
	padding: .5em;
	
  }

  .main-container {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    flex-grow: 1;
    width: 100%;
  }
  .column {
    width: 100%;
  }
  main {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 150;
  }
</style>
