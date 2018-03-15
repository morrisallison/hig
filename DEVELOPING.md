# Developing - HIG

## Getting Started

### Prerequisites

* [Node][] `>=8.2.1`
* [Yarn][] `>=1.5.1`
* [Python][] 2.7 _(see below)_

#### Why Python?

During installation, some dev dependencies are built using `node-gyp` which requires Python 2.7. Users developing on macOS will likely have Python 2.7 available, while other platforms may not (e.g. later versions of Ubuntu). Please view the [`node-gyp` documentation][node-gyp-docs] for more details.

[Node]: https://nodejs.org
[Yarn]: https://yarnpkg.com
[Python]: https://www.python.org
[node-gyp-docs]: https://github.com/nodejs/node-gyp

### Installation

Clone the repository.

```bash
git clone git@github.com:Autodesk/hig.git
```

Install dependencies.

```bash
yarn
yarn bootstrap
```

## Package development

* [Developing `hig-vanilla`](packages/vanilla/README.md)
* [Developing `hig-react`](packages/react/README.md)

## Deployment

1. Switch to `development` branch.
1. `yarn update-packages  # Update package version numbers and adds tags and publish commit`
1. `git push --follow-tags  # Push development and new tags`
1. Create a pull request to merge `development` into `master`.
1. Merge.
