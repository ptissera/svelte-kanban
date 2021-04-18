<script>
import IssueCardForm from "./board/IssueCardForm.svelte";

    let showIt = false;
</script>
<nav class="navbar navbar-expand-lg navbar-transparent navbar-light shadow-soft mb-2">
    <div class="container position-relative">
        <a class="navbar-brand mr-lg-5" href="../../index.html">
            <h1>Kanban</h1>
        </a>
        <div class="navbar-collapse" id="navbar-default-primary">
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                    <a href="#" class="nav-link">Board</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">Summary</a>
              </li>
            </ul>
        </div>
        <div class="d-flex align-items-center">
            <p class="text-dark mb-0">New card</p>
            <IssueCardForm/>
        </div>
    </div>
</nav>



<style>
    .navbar {
    box-shadow: 0px 6px 5px #b8b9be, 0px 0px 0px #ffffff !important;
    }

</style>