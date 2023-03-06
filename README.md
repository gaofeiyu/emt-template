# EMT

egg+mysql+typescript

dependencies packages version:
- egg: ^3.15.0
- mysql2: ^3.2.0
- typescript: ^4.9.5
- typeorm: ^0.3.12

这里要重点注意依赖版本，因为几个关键包的临近版本都有一些使用上的差异（尤其是typeorm），若实际使用中的时候遇到问题可以尝试去掉`^`，使用制定包来看问题是否修复。


