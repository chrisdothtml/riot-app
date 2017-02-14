<Editor-Action>
  <button
    class="btn"
    onclick="{ clickDelete }"
    show="{ opts.view_folder === 'Active' }"
  >
    <span>Delete</span>
  </button>

  <button
    class="btn"
    onclick="{ clickRestore }"
    show="{ opts.view_folder === 'Deleted' }"
  >
    <span>Restore</span>
  </button>

  <script>
    import { deleteNote, restoreNote } from '../../state/actions.js'

    clickDelete () {
      this.dispatch(
        deleteNote(opts.view_note)
      )
    }

    clickRestore () {
      this.dispatch(
        restoreNote(opts.view_note)
      )
    }
  </script>
</Editor-Action>
