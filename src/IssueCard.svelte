<script>
    export let card;
</script>
<div class="issue-card shadow-soft border-light">
    <div class="issue-card-header border-light">{card.name}<span class="issue-severity">{card.severity}</span></div>
    <div class="issue-card-body">
        <b>Description: </b>
        {card.description}
    </div>
    <div class="issue-card-footer border-light" title="Created"> {card.created} <author title="author">{card.author}</author></div>
</div>
<style>
  .issue-card {
	border-radius: .6em;
  }

  legend {
      font-size: .8rem;
      font-weight: bold;
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
    background-color: var(--gray-500);
    top: -0px;
    right: -2px;
    padding: .1em .5em;
    border-radius: .8em 0 0 .8em;
    position: relative;
  }
  .issue-card-footer {
    border-top: 1px solid;
    font-size: .8rem;
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