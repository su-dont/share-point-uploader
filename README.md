# SharePoint Uploader

GitHub action to upload a file to SharePoint

## Inputs

- `sp_url` - SharePoint URL
- `sp_username` - Username
- `sp_password` - Password
- `sp_folder` - Sharepoint folder where the file is to be uploaded
- `sp_file_name` - SharePoint destination file name
- `file` - Actual file created during job execution

## Usage Sample

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    name: Build job
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2.3.4

      - name: Create a test file
        run: echo "test" > test.txt

      - name: SharePoint uploader
        uses: su-dont/share-point-uploader@v2.0
        with:
          sp_url: https://my.sharepoint.com/:f:/r/sites/docs
          sp_username: john.doe@sharepoint.com
          sp_password: ${{ secrets.PASSWORD }}
          sp_folder: /My Documents/My Files
          sp_file_name: share_point_text.txt
          file: test.txt
```
