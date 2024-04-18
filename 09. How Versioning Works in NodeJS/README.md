## Dependency Versioning Guidelines

When managing dependencies in a Node.js project using a `package.json` file, understanding versioning is crucial. Here's
a breakdown of common versioning conventions and how to interpret them:

#### 1. caret symbol (`^`)

- **First Part (Minor Updates):** The versioning rule `^4.19.2` signifies that only minor updates are ignored. These
  updates usually include bug fixes and enhancements. You can safely ignore them without affecting your code stability.

#### 2. tilde symbol (`~`)

- **Last Part (Installs all Minor Updates Automatically):** If the version includes the tilde symbol (`~`), such
  as `"til": "~1.2"`, it means that all minor updates will be automatically installed. These updates typically contain
  patches and minor improvements.

#### 3. Recommended Updates

- **Second Part (Recommended Updates):** Versions like `^4.19.2` recommend updating dependencies. These updates are
  considered safe and may include new features or improvements. It's advisable to keep your dependencies up to date to
  benefit from the latest enhancements.

#### 4. Major Updates

- **Third Part (Major Updates):** When a versioning rule indicates major updates should not be installed, such
  as `"baz": ">1.0.2 <=2.3.4"`, it implies that major updates might introduce breaking changes or deprecations. It's
  recommended to review major updates carefully before applying them to your codebase.

#### Locking Dependencies

To lock the update of dependencies within specific ranges, you can define version ranges in your `package.json`:

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    // Allows any version from 1.0.0 to 2.9999.9999, inclusive.
    "bar": ">=1.0.2 <2.1.2",
    // Allows any version greater than or equal to 1.0.2 but less than 2.1.2.
    "baz": ">1.0.2 <=2.3.4",
    // Allows any version greater than 1.0.2 and less than or equal to 2.3.4.
    "boo": "2.0.1",
    // Allows only version 2.0.1.
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    // Allows versions less than 1.0.0 OR greater than or equal to 2.3.1 and less than 2.4.5 OR greater than or equal to 2.5.2 and less than 3.0.0.
    "asd": "http://asdf.com/asdf.tar.gz",
    // Specifies a tarball URL for the dependency.
    "til": "~1.2",
    // Allows all versions that are compatible with 1.2.x, automatically installing minor updates.
    "elf": "~1.2.3",
    // Allows all versions that are compatible with 1.2.3, automatically installing patch updates.
    "two": "2.x",
    // Allows any version starting with 2, e.g., 2.0.0, 2.1.0, etc.
    "thr": "3.3.x",
    // Allows any version starting with 3.3, e.g., 3.3.0, 3.3.1, etc.
    "lat": "latest",
    // Installs the latest version available.
    "dyl": "file:../dyl"
    // Specifies a local file path for the dependency.
  }
}
```

- These version ranges allow you to specify which updates are acceptable for each dependency.
- For example, `"til": "~1.2"` ensures that only minor updates within version `1.2.x` will be automatically installed.

> By following these guidelines and utilizing version ranges, you can effectively manage dependencies and ensure the
> stability and security of your Node.js projects.