<Editor-Action>
  <button class="btn" onclick="{ click }">
    <span>{ label }</span>
  </button>

  <script>
    import { deleteNote, restoreNote } from '../../state/actions.js'

    this.on('update', () => {
      if (opts.view_folder === 'Active') {
        this.label = 'Delete'
        this.action = deleteNote
      } else {
        this.label = 'Restore'
        this.action = restoreNote
      }
    })

    click () {
      this.dispatch(
        this.action(opts.view_note)
      )
    }
  </script>
</Editor-Action>
