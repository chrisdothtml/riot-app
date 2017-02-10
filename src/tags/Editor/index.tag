<Editor>
  <div class="Editor">
    <form action="#">

      <div class="Editor-top">
        <input
          type="text"
          name="note-title"
          class="note-title"
          placeholder="Note title"
          value="{ note.title }"
          onkeyup="{ updateTitle }"
          disabled="{ selectedFolder === 'Deleted' }"
        />
      </div>

      <div class="Editor-bottom">
        <textarea
          name="note-body"
          class="note-body"
          placeholder="Note body"
          onkeyup="{ updateBody }"
          disabled="{ selectedFolder === 'Deleted' }"
        >{ note.body }</textarea>
      </div>
    </form>
  </div>

  <script>
    import { stateView } from './selectors.js'
    import { getNote } from '../../common/utils.js'
    import './index.scss'

    this.note = {}
    this.subscribe(stateView)

    // update note when selected is updated
    this.on('update', () => {
      this.note = getNote(
        this.store.getState(),
        this.selectedNote
      )
    })

    updateTitle () {
      console.log('update note title')
    }

    updateBody () {
      console.log('update note body')
    }
  </script>
</Editor>
