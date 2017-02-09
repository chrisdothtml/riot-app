<Folder-Picker>
  <div class="Folder-Picker">
    <div class="container">
      <div class="Picker-btns">
        <button
          each="{ folder in folders }"
          class="btn { active: selectedFolder === folder }"
          onclick="{ selectFolder }"
        >
          { folder }
        </button>
      </div>
    </div>
  </div>

  <script>
    import { updateFolder } from '../../actions'
    import config from '../../config.json'
    import { selectedFolder } from './selectors.js'
    import './index.scss'

    this.folders = config.folders
    this.subscribe(selectedFolder)

    selectFolder (event) {
      this.dispatch(
        updateFolder(event.item.folder)
      )
    }
  </script>
</Folder-Picker>
