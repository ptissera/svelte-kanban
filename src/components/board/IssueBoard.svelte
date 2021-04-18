<script>
  import {columns} from "../../stores/cards-store";
  import { flip } from "svelte/animate";
  import IssueCard from "./IssueCard.svelte";
  let hoveringOverColumn;

  function dragStart(event, columnIndex, cardIndex) {
    const data = { columnIndex, cardIndex };
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }

  function drop(event, columnIndex) {
    event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);
    const [item] = $columns[data.columnIndex].cards.splice(data.cardIndex, 1);
    $columns[columnIndex].cards.push(item);
    columns.update(() => $columns);
    hoveringOverColumn = null;
  }
</script>
  <div class="main-container">
    {#each $columns as column, columnIndex (column.name)}
      <div animate:flip  class="column card bg-primary shadow-soft border-light"
      class:hovering={hoveringOverColumn === column.name}>
        <span class="column-header">{column.name}</span>
        <div 
          class="column-body"
          on:dragenter={() => (hoveringOverColumn = column.name)}
          on:dragleave={() => (hoveringOverColumn = null)}
          on:drop={(event) => drop(event, columnIndex)}
          ondragover="return false"
        >
          {#each column.cards as card, cardIndex (card)}
            <div class="item" animate:flip on:dragstart={(event) => dragStart(event, columnIndex, cardIndex)}>
              <IssueCard {card} />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
<style>
  .column-header {
    font-weight: bold;
    border-bottom: 1px solid var(--gray-500);
  }

  .column-body {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 10rem);
    gap: 1rem;
    padding: 0.5em;
  }
  .hovering {
    box-shadow: 6px 6px 12px #f0f5ae, -6px -6px 12px #dbe6c8 !important;
  }
  .item {
    display: inline; /* required for flip to work */
  }
  .main-container {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    gap: 1em;
    flex-grow: 1;
    width: 100%;
  }
  .column {
    width: 100%;
  }
</style>
