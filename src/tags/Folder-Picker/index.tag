<Folder-Picker>
  <div class="Folder-Picker">
    <div class="container">
      <div class="Picker-btns">
        <button
          each="{ folder in folders }"
          class="btn { active: selectedFolder === folder }"
          onclick="{ clickFolder }"
        >
          { folder }
        </button>
      </div>
    </div>
  </div>

  <script>
    import { selectFolder } from '../../actions.js'
    import config from '../../config.json'
    import { selectedFolder } from './selectors.js'
    import './index.scss'

    this.folders = config.folders
    this.subscribe(selectedFolder)

    clickFolder (event) {
      this.dispatch(
        selectFolder(event.item.folder)
      )
    }
  </script>
</Folder-Picker>
