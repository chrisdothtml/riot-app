<Editor>
  <div class="Editor">
    <form action="#" onsubmit="{ suppress }">

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

        <Editor-Action selected_folder="{ selectedFolder }" />
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
    import '../Editor-Action/index.tag'
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

    suppress (event) {
      event.preventDefault()
    }

    updateTitle () {
      console.log('update note title')
    }

    updateBody () {
      console.log('update note body')
    }
  </script>
</Editor>
