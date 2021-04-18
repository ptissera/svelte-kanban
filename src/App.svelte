<script>
  import { flip } from "svelte/animate";
  import IssueCard from "./IssueCard.svelte";
  let hoveringOverBasket;

  const columns = [
    { name: "backlog", cards: [{
          name: "Realizar el create card",
          description: " agregar un boton para crear una card",
          author: "p Tissera",
          created: "2021-04-18",
          updated: "2021-04-18",
          comments: [],
          severity: 1,
        }, {
          name: "Store information",
          description: " almacenar la informacion en algun medio",
          author: "p Tissera",
          created: "2021-04-18",
          updated: "2021-04-18",
          comments: [],
          severity: 2,
        },] },
    { name: "Started", cards: [] },
    { name: "In Progress", cards: [] },
    { name: "Blocked", cards: [] },
    {
      name: "Code Review",
      cards: [
        {
          name: "Problema con los estilos",
          description: " problema para ver los border",
          author: "p Tissera",
          created: "2021-04-12",
          updated: "2021-04-12",
          comments: [],
          severity: 3,
        },
      ],
    },
    { name: "Testing", cards: [] },
    { name: "Canceled", cards: [] },
    { name: "Closed", cards: [] },
  ];

  function dragStart(event, columnIndex, cardIndex) {
    // The data we want to make available when the element is dropped
    // is the index of the item being dragged and
    // the index of the basket from which it is leaving.
    const data = { columnIndex, cardIndex };
    event.dataTransfer.setData("text/plain", JSON.stringify(data));
  }

  function drop(event, columnIndex) {
    event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
    const data = JSON.parse(json);

    // Remove the item from one basket.
    // Splice returns an array of the deleted elements, just one in this case.
    const [item] = columns[data.columnIndex].cards.splice(data.cardIndex, 1);

    // Add the item to the drop target basket.
    columns[columnIndex].cards.push(item);
    columns = columns;

    hoveringOverBasket = null;
  }
</script>

<main>
  <h1>Kanban</h1>

  <div class="main-container">
    {#each columns as column, columnIndex (column)}
      <!-- svelte-ignore missing-declaration -->
      <div class="column card bg-primary shadow-soft border-light"
      class:hovering={hoveringOverBasket === column.name}>
        <span class="column-header">{column.name}</span>
        <div
          class="column-body"
          on:dragenter={() => (hoveringOverBasket = column.name)}
          on:dragleave={() => (hoveringOverBasket = null)}
          on:drop={(event) => drop(event, columnIndex)}
          ondragover="return false"
        >
          {#each column.cards as card, cardIndex (card)}
            <div class="item" on:dragstart={(event) => dragStart(event, columnIndex, cardIndex)}>
              <IssueCard {card} />
            </div>
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
  main {
    text-align: center;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 150;
  }
</style>
