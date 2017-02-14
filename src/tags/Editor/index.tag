<Editor>
  <div class="Editor">
    <form action="#" onsubmit="{ suppressForm }">

      <div class="Editor-top">

        <input
          type="text"
          class="note-title"
          placeholder="Note title"
          value="{ note.title }"
          onkeyup="{ updateTitle }"
          disabled="{ view.folder === 'Deleted' }"
        />

        <Editor-Action
          view_folder="{ view.folder }"
          view_note="{ view.note }"
        />
      </div>

      <div class="Editor-bottom">
        <textarea
          class="note-body"
          placeholder="Note body"
          onkeyup="{ updateBody }"
          disabled="{ view.folder === 'Deleted' }"
        >{ note.body }</textarea>
      </div>
    </form>
  </div>

  <script>
    import { view } from '../../state/selectors.js'
    import { findNote } from '../../common/utils.js'
    import '../Editor-Action/index.tag'
    import './index.scss'

    this.note = {}
    this.subscribe(view)

    // update note when view is updated
    this.on('update', () => {
      this.note = findNote(
        this.store.getState(),
        this.view.note
      )
    })

    suppressForm (event) {
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
