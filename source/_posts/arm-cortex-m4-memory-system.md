---
title: ARM Cortex M4 - Memory System Details
thumbnail: false
schematype: TechArticle
date: 2018-01-12 12:55:00
description:
categories:
- Harware
- ARM
tags:
- ARM
- Cortex-M
keywords:
---
All Cortex-M processors have 4GB addressable memory space(0x0000 0000 to 0xFFFF FFFF) of 32bit addressing. Memory space is unified which means instructions and data share the same address space.

Memory locations for internal peripherals such as <abbr title="Nested Vector Interrupt Controller">NVIC</abbr>, <abbr title="System Tick timer">SysTick</abbr>, <abbr title="Memory Protection Unit">MPU</abbr> and  debug components inside the processor are fixed.

The 4GB addressable memory space is divided into several memory regions.

* Code                                     <code>(region of 0.5GB)</code>
* <abbr title="Static Random Access Memory">SRAM</abbr>                         <code>(region of 0.5GB)</code>           
* Peripherals                              <code>(region of 0.5GB)</code>
* RAM                                      <code>(region of 1.0GB)</code>
* Devices                                  <code>(region of 1.0GB)</code>
* System                                   <code>(region of 0.5GB)</code>
<!--more -->

It is possible to store and execute code from SRAM and RAM regions but the processor is not optimized for such operations and requires an extra clock cycle per instruction for each instruction fetch. So, performance is slightly slower when executing program through the system bus.

**Program execution from Peripherals, Devices, and System memory regions is not allowed.**

Memory space for NVIC, MPU, <abbr title="System Control Block">SCB</abbr> and various system peripherals is called <abbr title="System Control Space">SCS</abbr>.
<hr />
### Code Region: 0x0000 0000 - 0x1FFF FFFF (512MB) ###
<hr />Name itself speaks for this region, this memory space is primarily for program code, including default vector table that is part of the program code. This region also allows data accesses.
<hr />
### SRAM Region: 0x2000 0000 - 0x3FFF FFFF (512MB) ###
<hr />This region starts right after the code region and spans 512MB. This is primary used for connecting SRAM even though this is no limitation of exact memory type, most of the MCU vendors use this for on-chip SRAM.

The first 1 MB  starting from <code>0x2000 0000 to 0x2010 0000</code> is bit addressable if the optional bit-band feature is included by the MCU vendors. As said before, we can execute code from this address space but the processor is not optimized for that.
<hr />
### Peripherals Reg : 0x4000 0000 - 0x5FFF FFFF (512MB) ###
<hr />This region also spans 512MB of memory space same as *Code* and *SRAM* regions. It is mostly used for on-chip peripherals. Similar to SRAM, the first 1MB <code>0x4000 0000 to 0x4010 0000</code> is bit addressable if the optional bit-band feature is included.
<hr />
### RAM Region: 0x6000 0000 - 0x9FFF FFFF (1GB) ###
<hr />This region has two slot of 512MB each and mainly used for other RAM such as off-chip memories. It can store both program  code and data.
<hr />
### Devices Region: 0xA000 0000 - 0xDFFF FFFF (1GB) ###
<hr />This region contains two slots of 512MB memory space for other peripherals such as off-chip peripherals.
<hr />
### System Region: 0xE000 0000 - 0xFFFF FFFF (512MB) ###
<hr />This region spans 512MB and contains Private Peripheral Bus(Internal  and External) (PPB), and System/Vendor specific system peripherals.

* PPB Internal - 0xE000 0000 - 0xE003 FFFF
* PPB External - 0xE004 0000 - 0xE00F F000
* Vendor-specific area - 0xE0100000 to 0xFFFFFFFF
Internal PPB is used to access system components such as the NVIC, SysTick, MPU, as well as debug components inside the Cortex-M4 processors. In most cases this memory space can only be accessed by program code running in privileged state.

External PPB region is available for additional optional debug components and so allow silicon vendors to add their own debug or vendor-specific components. This memory space can only be accessed by program code running in privileged state. Note that the base address of debug components on this bus can potentially be changed by silicon designers.

The remaining memory space is reserved for vendor-specific components and in most cases this is not used.
