<script>
    export let card;
</script>
<div class="issue-card shadow-soft border-light" draggable="true">
    <div class="issue-card-header border-light">{card.name}<span class="issue-severity severity{card.severity}" >{card.severity}</span></div>
    <div class="issue-card-body">
        <b>Description: </b>
        {card.description}
    </div>
    <div class="issue-card-footer border-light" title="Created"> {card.created} <author title="author">{card.author}</author></div>
</div>
<style>
  .issue-card {
    display: flex;
    flex-direction: column;
	 border-radius: .6em;
  }
  .issue-card:hover {
    box-shadow: 6px 6px 12px #afdd5a, -6px -6px 12px #dbe6c8 !important;
  }
  
  .severity1 {
    background-color: green;
    color: yellow;
  }

  .severity2 {
    background-color: greenyellow;
  }

  .severity3 {
    background-color: yellow;
  }

  .severity4 {
    background-color: orange;
  }

  .severity5 {
    background-color: red;
  }
  
  .issue-card-header {
	padding: .3em 0;
	   border-bottom: 1px solid;
    display: block;
    overflow: hidden;
    background-color: var(--gray-400);
    border-radius: .7em .7em 0 0;
  }

  .issue-severity {
    float: right;
    border: 1px solid var(--gray-500);
    top: 4px;
    right: 4px;
    padding: 0 .3em;
    border-radius: 50px;
    position: relative;
    font-size: .7rem;
  }
  .issue-card-footer {
    border-top: 1px solid;
    font-size: .7rem;
    padding: .5em;
    display: flex;
    justify-content: space-between;
    background-color: var(--gray-400);
    border-radius: 0 0 .7em .7em;
  }

  .issue-card-body {
      font-size: .8rem;
      padding: .2em .8em;
      width: 100%;
      max-height: 10em;
      overflow-x: hidden;
      overflow-y: auto;
  }

  author {
      background-color: var(--gray-200);
      border-radius: 1em;
      padding: 0 .5em;
  }


</style>