<script>
  import { createEventDispatcher } from 'svelte';
  import Modal from "./../shared/Modal.svelte";
  import {columns} from "../../stores/cards-store";
  import { v4 as uuidv4 } from "uuid";
  
  const dispatch = createEventDispatcher();
  let showModal = false;
  let ITEM = {
    id: null,
    name: "",
    description: "",
    author: "",
    created: "",
    updated: "",
    comments: [],
    severity: 1,
  };

  export let item = {...ITEM};

  const clean = () => {
    item = {...ITEM};
    showModal = false;
  };
  const onSubmitHandler = () => {
    dispatch("submit", {
      item,
    });
    clean();
  };

  const cancel = () => {
    clean();
  }
</script>

<button class="ml-2" type="button" on:click={() => (showModal = true)}>
  <span class="plus">+</span>
</button>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <div slot="header">
      <h2>New issue</h2>
    </div>
    <div slot="body">
      <form on:submit|preventDefault="{onSubmitHandler}">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            bind:value={item.name}
            id="name"
            required
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            bind:value={item.description}
            id="description"
            required
            placeholder="Description"
          />
        </div>
        <div class="form-group">
          <label>Author</label>
          <input
            type="text"
            class="form-control"
            bind:value={item.author}
            id="author"
            required
            placeholder="Author"
          />
        </div>
        <div class="form-group">
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label>Severity</label>
          <div class="form-group-severity">
            <div class="form-check">
              <input
                type="radio"
                bind:group={item.severity}
                id="severity1"
                class="form-check-input"
                value={1}
              />
              <label class="form-check-label" for="severity1">1</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                id="severity2"
                class="form-check-input"
                bind:group={item.severity}
                value={2}
              />
              <label class="form-check-label" for="severity2">2</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                id="severity3"
                class="form-check-input"
                bind:group={item.severity}
                value={3}
              />
              <label class="form-check-label" for="severity3">3</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                id="severity4"
                class="form-check-input"
                bind:group={item.severity}
                value={4}
              />
              <label class="form-check-label" for="severity4">4</label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                id="severity5"
                class="form-check-input"
                bind:group={item.severity}
                value={5}
              />
              <label class="form-check-label" for="severity5">5</label>
            </div>
          </div>
        </div>
        <br />
        <div class="button-content">
          <button class="btn btn-primary">Create</button>
          <button on:click={cancel} class="btn btn-default">Cancel</button>
        </div>
      </form>
    </div>
  </Modal>
{/if}

<style>
  form {
    padding: 2em 3em;
    text-align: left;
  }

  .button-content {
    display: flex;
    gap: 1em;
  }

  .form-group-severity {
    display: flex;
    gap: 2em;
  }
</style>
