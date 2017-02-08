<Folder-Picker>
  <div class="Folder-Picker">
    <div class="container">
      <div class="Picker-btns">
        <button
          each="{ folder in store.folders }"
          class="btn { active: store.selectedFolder === folder }"
          onclick="{ selectFolder }"
        >
          { folder }
        </button>
      </div>
    </div>
  </div>

  <script>
    import './index.scss'

    this.mixin('state')
    this.folders = ['Active', 'Deleted']

    /**
     * Selects a new folder
     */
    selectFolder (event) {
      this.publish('selectFolder', {
        folder: event.item.folder
      })
    }
  </script>
</Folder-Picker>
