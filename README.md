# use-scribbr

[![GitHub issues](https://img.shields.io/github/issues/iu-actions/use-scribbr)](https://github.com/iu-actions/use-scribbr/issues)

This action generates your bibliography with the APA-Generator from Scribbr.

## Found a bug? 💁‍♀️

Thanks for letting us know! Please [file an issue](../../issues/new?assignees=&labels=&template=bug_report.md&title=) and we should reply shortly.

## Configuration

This action requires the presence of inputs, which are listed below.

### Inputs

- `bibliography`: Path to the `bibliography.scribbr`. (**required**)

### Outputs

- `bibliography`: Path to the `bibliography.md`.

## Example

Below you will find an example of how you can use this action.

```yaml
uses: iu-actions/use-scribbr@v1
id: scribbr
with:
  # generator details
  bibliography: exam/bibliography.scribbr
```

## License

The code is provided under a GNU General Public License (v2).

**Note**: This GitHub action is **not** powered by Scribbr. Any brand names, such as Scribbr and/or the Scribbr logo belong to their respective owners.
