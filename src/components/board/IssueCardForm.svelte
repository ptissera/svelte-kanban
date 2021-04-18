<script>
  import Modal from "./../shared/Modal.svelte";
  import {columns} from "../../stores/cards-store";
  let showModal = false;

  let issue = {
    name: "",
    description: "",
    author: "",
    created: "",
    updated: "",
    comments: [],
    severity: 1,
  };

  const create = () => {
    issue.created = Date.now();
    $columns[0].cards.push(issue);
    columns.update(() => $columns);
    showModal = false;
  }

  const cancel = () => {
    showModal = false;
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
      <form action="#">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            bind:value={issue.name}
            id="name"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            bind:value={issue.description}
            id="description"
            placeholder="Description"
          />
        </div>
        <div class="form-group">
          <label>Author</label>
          <input
            type="text"
            class="form-control"
            bind:value={issue.author}
            id="author"
            placeholder="Author"
          />
        </div>
        <div class="form-group">
          <label>Severity</label>
          <div class="form-group-severity">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                bind:group={issue.severity}
                value={1}
              />
              <label class="form-check-label" for="1">1</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                bind:group={issue.severity}
                value={2}
              />
              <label class="form-check-label" for="2">2</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                bind:group={issue.severity}
                value={3}
              />
              <label class="form-check-label" for="3">3</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                bind:group={issue.severity}
                value={4}
              />
              <label class="form-check-label" for="4">4</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                bind:group={issue.severity}
                value={5}
              />
              <label class="form-check-label" for="5">5</label>
            </div>
          </div>
        </div>
        <br />
        <div class="button-content">
          <button on:click={create} class="btn btn-primary">Create</button>
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
