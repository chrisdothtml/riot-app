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

  <script>
    import { deleteNote, restoreNote } from '../../actions.js'

    clickDelete () {
      this.dispatch(
        deleteNote(opts.selected_note)
      )
    }

    clickRestore () {
      this.dispatch(
        restoreNote(opts.selected_note)
      )
    }
  </script>
</Editor-Action>
