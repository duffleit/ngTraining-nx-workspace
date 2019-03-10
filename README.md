# Nx Workspace  

This exercise shows you how to create a monorepo workspace by just using the NX-CLI commands.

## Tasks: 

1. Create a new nx-workspace. During the setup a few selections need to be done: Select your preferred stylesheet-format and use your first name as npm-scope.
```
npx create-nx-workspace your-workspace
cd your-workspace
```

2. Create again two applications: An `overview`, and a `checkout` application. Both of them in the root folder (keep the answer `in which directory` empty). Select `karma` and `protractor` for testing and use `scope:app` as the tag.
```
ng generate application overview
ng g app checkout
```

3. Create a few libraries: 

All of them have no initial Parent Module, do not need Routing, are not Lazy-Loaded and use the default Test-Runner.
  
| Command | Directory | Framwork | Tag | 
| --- | --- | --- | --- | 
| ng g lib user-widget | feature | Angular | scope:shared:feature | 
| ng g lib button | ui | Angular | scope:shared:ui | 
| ng g lib bitcoin-miner | core | __Typescript__ | scope:shared:core |
  
One last time in fast-mode: 
```
ng g lib user-client --directory=data --framework=angular --parent-module --lazy=false --unit-test-runner=karma --tags=scope:shared:data --routing=false
```

4. Create a simple `button` component in the `ui-button` library with `ng g c button --project=ui-button` and add it to the exports. Use it in the `app.component` of the `overview`-app. 

5. Create a simple mining service in the created typescript-library `bitcoin-miner`: 

```
export class MinerService {
  public mine(): string {
    const shuffle = (s: string) => s.split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffle("abcdefghijklmnopqrstuvwxyz");
  }
}
```

6. Export this created service in the barrel-file `index.ts`. Next, inject it in in the `app.component` of the `overview`-app. To be able to do so, add it as `provider` in the `overview`-module.  

```
#barrel-export:
export { MinerService } from "./lib/miner.service";
```

7. Inject the `MinerService` again accidentally into the `UiButton`.

```
constructor(private minerService: MinerService){}
```

8. Run `ng serve overview` to see that everything is still running properly.

9. Call `npm run dep-graph` to get an overview of your current workspace.

10. Take a look at the `nx.json` file to check if the scopes are correct, as they are needed to impose Constraints on the Dependency Graph.

11. Open the `tslint.json` file. Under `nx-enforce-module-boundaries` remove the existing-wildcard constraint and add a new one to only allow apps having a dependency on libs.

```
"nx-enforce-module-boundaries": [
      true,
      {
        "allow": [],
        "depConstraints": [
          { "sourceTag": "scope:app", "onlyDependOnLibsWithTags": ["scope:shared:core", "scope:shared:feature", "scope:shared:ui", "scope:shared:data"] }, 
        ]
      }
    ]
```

12. Run `ng lint` to check if the rules work correctly. 

13. In order to practice, add another rule to allow the `MinerService` to be imported in the `UiButton`. Remove it again and delete the error-causing dependency. 

14. Calculate the projects which are affected by changing the `MinerSerice`, or the `UiButton`.

```
npm run affected:dep-graph -- --files=libs/core/bitcoin-miner/src/lib/miner-service.ts
npm run affected:dep-graph -- --files=libs/ui/button/src/lib/button/button.component.ts
```

15. Run a build that only builds the apps and libs that have been affected by a change in a particular file. 

```
npm run affected:build -- --files=libs/ui/button/src/lib/button/button.component.ts
```

16. Run a parallel build for all apps and libs that are affected by changes since the last commit.

```
npm run affected:build -- --base=master --parallel
```
