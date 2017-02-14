<Folder-Picker>
  <div class="Folder-Picker">
    <div class="container">
      <div class="Picker-btns">
        <button
          each="{ folder in folders }"
          onclick="{ clickFolder }"
          class="btn { active: folder === view.folder }"
        >
          { folder }
        </button>
      </div>
    </div>
  </div>

  <script>
    import { selectFolder } from '../../state/actions.js'
    import config from '../../config.json'
    import { view_folder } from '../../state/selectors.js'
    import './index.scss'

    this.folders = config.folders
    this.subscribe(view_folder)

    clickFolder (event) {
      this.dispatch(
        selectFolder(event.item.folder)
      )
    }
  </script>
</Folder-Picker>
