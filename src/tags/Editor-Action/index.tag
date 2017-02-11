<Editor-Action>
  <button
    class="btn"
    onclick="{ clickDelete }"
    show="{ opts.selected_folder === 'Active' }"
  >
    <span>Delete</span>
  </button>

  <button
    class="btn"
    onclick="{ clickRestore }"
    show="{ opts.selected_folder === 'Deleted' }"
  >
    <span>Restore</span>
  </button>
</Editor-Action>
