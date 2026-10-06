# Data Centre Masterclass for Front-Office Finance: Narration Script

Companion to `DC_Masterclass_FO_Pitchbook.pptx` (37 slides). The text for each slide is identical to the speaker notes embedded in the deck. Cues in square brackets mark slide changes. Total length is about 13,000 words, roughly 90 minutes at a teaching pace.

## Slide 1: Data Centres, Read as Financial Assets

[SLIDE 1 ON SCREEN]

Welcome. This masterclass has one job. It turns a data centre from a black box with a dollars-per-megawatt number on the side into a physical system you can follow, price sensibly and challenge in diligence.

You are not here to become an electrical or mechanical engineer. You are here to build enough physical and commercial fluency to do five things. Follow how power gets from the grid to the rack. Follow how heat gets from the chip to the atmosphere. Understand what sits inside each major system. Understand how that equipment is bought and what price evidence is genuinely valid for it. And connect all of that to replacement cost, bankability and buy-versus-build.

The graphic on the right is the whole course in one picture. Power flows in along the amber line. Heat flows out along the teal line. The violet line is everything that makes the asset safe, observable and provable: fire, security, controls, fibre and commissioning. Every slide you are about to see belongs to one of those three lines.

A word on evidence. Everything in this deck is anchored to a frozen equipment ontology of 418 lines across 16 branches. That workbook tells us what exists physically, how it is packaged, and, importantly, where public price evidence is strong and where it is still an open gap. Where the deck shows a number, the number is labelled as current or historical, and as a package or a component. Where no defensible current price exists, the deck says so. That honesty is a feature. A banker who knows which numbers are weak is more useful than one who quotes a precise number from the wrong source.

Plan roughly two to three hours if you read the notes properly. Move on when you are ready.

[NEXT SLIDE]

## Slide 2: Power flows in, heat flows out, and assurance wraps both

[SLIDE 2 ON SCREEN]

Start with the most useful mental model in the whole course. A data centre is three chains that all meet at one place, the IT load.

The amber chain is electrical. Grid power comes in, is protected and stepped down, is backed up by generators and by UPS batteries, and is distributed through low voltage boards and busway to the rack. Read it left to right.

The teal chain is thermal. Nearly every watt the servers consume turns into heat. That heat has to be captured at the chip or the rack, moved by air or liquid through loops, and rejected to the atmosphere. Notice the arrows run right to left. Power travels towards the IT load and heat travels away from it. Keep that direction in your head, because it explains why cooling plant is sized to what the IT load draws, and why a power constraint and a cooling constraint can both cap the same megawatt.

The violet chain is assurance. Fire protection, security, controls and metering, fibre connectivity, and commissioning. Its cargo is confidence. It is what lets a lender or a customer believe the first two chains will keep working.

The small letters under each box are the branch letters in the ontology workbook, A to P. B is grid and HV/MV, C is standby power, D is UPS and stored energy, E is LV distribution, F is heat rejection, G is white-space air cooling, H is liquid cooling, I fire, J security, K controls, L network, M white space, and O is maintenance and commissioning. You will see those letters again.

The bottom line is the finance point. A single dollars-per-megawatt number compresses all three chains. When it is wrong, you cannot tell which chain is wrong. Learning the chains lets you decompose it.

[NEXT SLIDE]

## Slide 3: Read the ontology row, then ask the five questions it answers

[SLIDE 3 ON SCREEN]

This is the operating method for the whole deck. Take any row in the ontology workbook and ask five questions.

The row on screen is a real one. D-010 is a valve-regulated lead-acid battery string, in branch D, UPS and stored energy. Its quantity-driver code is QU, which the workbook defines as protected kilowatts plus runtime plus redundancy. Its evidence code is P, which only means a primary product family was found when the row was created. It does not mean a current price exists. Its lifecycle entry says up to one hundred percent of the string may need replacement, and the interval is unknown. The workbook deliberately refuses to insert a generic three-to-five year assumption without a source.

Move one is the physical job. A battery string stores energy so the load rides through a grid failure until the generators start.

Move two is the quantity driver. It is protected load times minutes of runtime, times the redundancy design. Rack count and floor area do not drive it.

Move three is the commercial package. The battery may be priced inside the UPS package, or as a separate line. The ontology has frozen rules that make that conditional on vendor scope. You will see that on the UPS package slide.

Move four is valid evidence. Which source class can price this, for which date and scope? An OEM quote, a tender or an executed award. A retail price for a ten kilovolt-amp rack UPS is the wrong scale.

Move five is risk. For batteries that means replacement cycles, runtime shortfall against what customers were promised, and fire and warranty exposure.

Along the bottom are four commercial states people routinely confuse. Included means in the quoted price. Housed means physically inside a module while the price may sit elsewhere. Installed means fixed and connected on site. Commissioned means tested under load and accepted. A lot of double-counting and a lot of overstated capacity come from sliding between these four words. We will keep returning to them.

[NEXT SLIDE]

## Slide 4: Of 418 equipment lines, only 10 carry a native public price observation

[SLIDE 4 ON SCREEN]

Before we go into the systems, look at the territory we are mapping. The frozen ontology has four hundred and eighteen equipment lines across sixteen branches. The slate bars are the number of lines in each branch.

The amber bars are the number of lines in each branch that carry at least one native public price observation. Ten lines out of four hundred and eighteen. Fifty-nine lines have primary OEM product evidence, which tells you what the equipment is and says nothing about cost.

Look at where the amber sits. Controls, network, small UPS, a commodity breaker, a rack. These are catalogue products with posted prices. Now look at where the amber is missing. Grid and HV and MV equipment, heat rejection, white-space air cooling, liquid cooling. Those are the largest-ticket, most engineered systems, and they are sold by quotation.

This gap reflects the structure of the market. A better scrape would not remove it. The more a product is configured to a site, a rating and a voltage, the less likely anyone posts a price. For a banker the consequence is direct. The systems that dominate capex are precisely the systems for which you will rely on package evidence, tenders, executed awards and historical cost plans, and you will have to be disciplined about their scope and date.

The ontology names this gap explicitly and keeps it open. Current-price gaps remain real for transformers, HV and MV switchgear, large UPS and batteries, LV equipment and busway, central cooling and liquid cooling. This deck will never fill those gaps with an invented number. When you see the red gap badge later on, that is what it is telling you.

[NEXT SLIDE]

## Slide 5: A signed grid connection is not rack-level usable capacity

[SLIDE 5 ON SCREEN]

This is the spine of the electrical story. Read it left to right: grid connection, HV and MV protection, transformer, generator and UPS, LV switchboard, busway and PDU, rack PDU, and finally the IT load. Each box has a little symbol so you start to recognise the equipment in a single-line diagram.

The teal row gives the quantity driver at each stage. This is the single most important habit for a model. At the front of the chain you size in MVA and fault level. At the generator and UPS you size in kilowatts, minutes of runtime and redundancy. At the LV boards and busway you size in amps. At the rack you size in kilowatts per rack. If someone prices every stage in dollars per megawatt, they are hiding four different unit conversions inside one number.

The grey row is the ontology branch, B through E, then M for the rack hardware. The red row is the commercial trap that most often appears at that stage. At the front end the trap is treating a contract as energisation. In the middle the trap is that equipment is sold as sub-systems, so the generator package and the UPS package each contain items that also appear as their own lines elsewhere. At the rack end the trap is that a busway tap-off or an A and B feed design can cap usable density below what the rest of the chain could support.

The ribbon shows voltage. The step-down happens at the transformer. The reference cost plan we use later in this course steps from twenty-two kilovolts to point four kilovolts. That is one example, and real sites differ with the utility.

Finally the three chevrons. Contracted, energised and deliverable to rack are three different claims about the same megawatt. A banker should ask which claim the seller is making, and what evidence sits behind it. A connection agreement is contracted. A utility certificate and a tested protection scheme is energised. Deliverable to rack needs a firm path through every stage you see above.

[NEXT SLIDE]

## Slide 6: The substation is a protected corridor, and every symbol is a priced line

[SLIDE 6 ON SCREEN]

This is a simplified single-line diagram, the engineer's way of drawing a power system. Power enters from the utility on the left and moves right. The line is the conductor. Everything hanging off it is a device that protects, measures or switches it.

Walk through it. The surge arrester gives lightning and switching surges a safe path to earth. The disconnector and earth switch let people isolate and ground a section so it can be worked on safely. The circuit breaker is the device that actually interrupts fault current. Fault current is the huge current that flows if something short-circuits. The current transformer and voltage transformer are measurement devices. They shrink the line current and voltage to small signals. Those signals feed the protection relay, which decides in milliseconds whether to trip the breaker. The substation DC battery and charger sit underneath because the protection must still work when AC has failed.

The main power transformer steps voltage down. The neutral earthing resistor limits earth fault current so a fault does not destroy equipment. Then the MV switchgear splits power into feeders, with a bus coupler so two sections can be tied together or separated. MV cables carry power to the next stage.

Why does a finance audience need this? Because every symbol on this slide is an ontology line, and many are bought as part of a bigger package. A single price for a substation bay can contain breakers, instrument transformers, relays and the control panel. If your model also carries those as separate lines, you have double-counted. Package controls in the ontology say that for a transformer or bay package these children are suppressed only when the vendor scope says they are included.

The four points on the right are diligence prompts. Ask who owns the bay. Ask for the protection study and the utility's approval. Ask whether two feeds are truly independent. Ask for the actual energisation date, not the contracted date.

On evidence, this is an area with no usable current public price. The ontology records it as a gap and points you to tenders, bills of quantities and awards. Keep it that way in your model until you have project-specific evidence.

[NEXT SLIDE]

## Slide 7: A transformer is quoted by kVA, and the bay around it is where scope hides

[SLIDE 7 ON SCREEN]

A transformer is the simplest big machine in the building. Two coils of wire wrap around a shared iron core. Alternating current in one coil creates a changing magnetic field in the core, which induces a voltage in the other coil. The ratio of turns sets the ratio of voltages. More turns on the high-voltage side, fewer on the low-voltage side, and you step the voltage down. The tank holds an insulating liquid that also carries heat to external radiators, which is why there are fan or pump banks on large units.

A transformer is sized in kVA or MVA, the apparent power it can pass without overheating. That is your quantity driver. Redundancy sits on top: how many transformers are needed so that losing one still leaves enough capacity.

Now the commercial point. When you buy a transformer you rarely buy only the tank and coils. The ontology freezes a package control for the parent line B-015. The current transformer, voltage transformer, protection relay, control panel and fan bank are only suppressed as separate lines when the vendor scope says they are included. The amber colour means conditional, never assumed.

On the right side, the reference cost plan quotes its transformers together with a ring main unit and a metering unit. So a model that takes that price and also adds a separate RMU and meter would double-count. A prefabricated eHouse or substation module is a different trap. The module houses equipment, and the ontology rule is blunt: housed is not included. The vendor bill of materials decides.

On evidence, the only numbers we have are historical. The cost plan from the second quarter of 2021 prices a two-and-a-half MVA unit at seventy-five thousand pounds and a three MVA unit at ninety thousand pounds. Both work out at thirty pounds per kVA. This is supply only, in London, five years old, and from one document. Two points on one line tell you the cost plan scaled linearly. They add nothing about the wider market. Currentising it is an explicit modelling step, which we cover later. The current public price for this class is an open gap.

[NEXT SLIDE]

## Slide 8: A generator set is five sub-systems that must all work on the day

[SLIDE 8 ON SCREEN]

A standby generator is a power station in a box, and it is easiest to understand as five sub-systems that all have to work together on the day.

Fuel on the left. Fuel sits in a bulk tank, is moved by a transfer pump, is filtered and polished so water and sediment do not clog the engine, and is held in a small day tank next to the engine. Autonomy, meaning how many hours the site can run without refuelling, is set by tank volume. That is a storage driver, separate from the generator rating.

The engine in the middle burns fuel and turns a shaft. Around the engine are the support systems: lubrication, jacket-water cooling, a coolant header tank and crankcase ventilation. The alternator on the same shaft turns rotation into electricity. The local control panel starts the set, synchronises it with other sets and protects it.

Exhaust is on top. Gas leaves through emissions treatment, where the SCR or particulate filter sits, then a silencer, then a stack. Cooling is at the bottom, with a radiator or remote cooler that rejects engine heat. A starting battery and a block heater keep the engine ready to start quickly. A permanent load bank lets operators test the set without touching the live load.

On the right the electricity goes through the output breaker and the paralleling switchgear, which lets several sets share a bus, and then on to the LV board and the UPS input.

Why does the UPS matter here? The generator needs seconds to start and stabilise. The UPS battery covers that gap. So the reliability of the whole site depends on the handshake between these two systems, which commissioning must prove.

For finance, three things. First, the nameplate megawatt is only valuable if permits allow it to run and the fuel can be delivered. Second, most of the boxes on this diagram can appear as their own ontology line and as a child inside a complete-set price, which is the next slide. Third, generators have large service and overhaul needs. The ontology holds no numeric life for them, because engine families differ, and it warns against inferring overhaul hours across families.

[NEXT SLIDE]

## Slide 9: A complete genset price already contains most of its own parts

[SLIDE 9 ON SCREEN]

This slide is about double-counting, which is the most common way a bottom-up cost model overstates capex.

In the middle is the parent line, C-001, the complete diesel or HVO generator set. When a vendor quotes a complete packaged genset, the quote normally includes the standard engine-generator assembly. The eight green chips on the left are the children the ontology freezes as default-included. If your model takes a complete-set price and also adds an alternator line, an engine line, a control panel line, a starting battery line and the rest, you are paying for the same machine twice. The ontology's rule is to suppress those children's acquisition capex and keep them in the model for lifecycle and replacement analysis. That distinction matters. The alternator can still wear out and appears in the replacement schedule, even without a separate purchase line.

The amber chips on the right are conditional. The output breaker, day tank, silencer, stack, emissions packages, radiator, block heater and enclosure are included only when the vendor's scope says so. There is no universal assumption frozen, because vendors differ. A complete set with a sound-attenuated enclosure includes the enclosure. A bare set does not. A site with a remote radiator excludes the radiator from the set price. Your job is to read the quote.

The white chips are outside the frozen rules. Paralleling gear, the bulk tank, polishing skids and the permanent load bank often sit in separate packages. No rule exists, so confirm each one.

At the bottom, the evidence. The reference cost plan from the second quarter of 2021 gives three generator points with a twenty-four hour belly tank and neutral earthing resistor included, supply only. They are around three hundred and six to three hundred and nineteen pounds per kW. That is a historical package anchor. It dates from 2021.

For current evidence the picture is weaker. Marketplace asking prices exist for two-megawatt sets. Asking prices, used units and unspecified configuration make them calibration only. The Cardonald award is an executed price, which is strong. It bundles a generator with wiring and switchgear and does not state the rating. It is installed-package evidence. It cannot be unit-normalised.

[NEXT SLIDE]

## Slide 10: A UPS converts power twice so the load never feels the grid

[SLIDE 10 ON SCREEN]

The UPS, or uninterruptible power supply, answers a simple question. What keeps the servers running during the seconds between a grid failure and the generators taking over, and what cleans the power in the meantime?

Follow the amber line. Utility AC comes in through an input switchboard to the rectifier. The rectifier turns AC into DC. That DC sits on a DC bus. The inverter turns the DC back into clean AC and sends it through an output switchboard to the critical load. Converting twice looks wasteful, and it costs a little efficiency. The payoff is an output rebuilt from scratch. Grid noise, sags and brief outages never reach the servers.

The batteries hang off the DC bus below, through a fuse or breaker. In normal operation they float, charged and waiting. When the grid fails, they discharge into the DC bus and the inverter carries on without a break. A battery management system and monitoring watch the strings. The runtime is whatever the battery energy and the load allow. Think minutes, not hours, because the generator exists for the long haul.

Now the two bypasses, which matter more than people expect. The teal line is the static bypass. It is an electronic switch. If the UPS has a fault or sees an overload, the static bypass moves the load directly to mains power in a fraction of a cycle. The violet dashed line is the maintenance bypass. It is a manual switch that lets engineers isolate the whole UPS for service while the load stays powered on raw mains.

The four boxes at the bottom are the operating modes. Normal, grid fails, fault or overload, and maintenance. Ask any operator which mode the site spends time in and how often they exercise the others.

The quantity driver, QU, is protected kilowatts plus minutes of runtime plus redundancy. A UPS rated in kVA and kW is sized to the load. Its battery is sized to the runtime. Those are two different cost drivers, and the next slide shows why they are often priced together and sometimes priced apart.

[NEXT SLIDE]

## Slide 11: UPS evidence spans three scales and none is a current MW price

[SLIDE 11 ON SCREEN]

On the left side of this hub are the children that may sit inside a UPS price. Static bypass, maintenance bypass, the battery strings or Li-ion cabinets, racks, the battery management system, the DC breaker and fuse, monitoring and the DC interconnect. The ontology freezes these as conditional. They are suppressed as separate acquisition lines only when the vendor scope says the UPS package includes them. It never assumes it.

On the right are items usually priced separately. Input and output switchboards, isolation and step-down transformers, battery-room ventilation and the fire detection interface. One entry is a lifecycle item, the capacitor and fan service kit, which belongs in the replacement schedule and sits outside acquisition capex. And, again, a prefabricated UPS module houses equipment. It does not automatically include it.

The batteries need special attention. The UPS frame is a power electronics asset. The battery is an energy store with a different chemistry, a different fire profile and a different replacement cycle. In a model, a combined price should be split back into those two lines for lifecycle, even if you used the package price for acquisition.

The bottom row is the heart of the slide. It shows four kinds of price evidence on the same equipment family, and none of them lets you price a megawatt-scale UPS today. The first is current and observable. A small rack UPS has a posted price, both a list price and a reseller price, and the ontology keeps those apart and says do not average them. It is the right kind of evidence at the wrong scale. The second is a historical cost plan from 2021. It gives a package at real project scale, about one hundred and ninety-five pounds per kVA including fifteen minutes of batteries, supply only. It is a shape anchor. The third is an executed regional framework award. It tells you the order of magnitude of a procurement and nothing about unit rates. The fourth box says what it is. The current price for MW-class UPS and batteries remains an open gap.

The finance lesson is to match the evidence to the scale, and say out loud when you cannot.

[NEXT SLIDE]

## Slide 12: The last 30 metres decide how much power a rack can actually use

[SLIDE 12 ON SCREEN]

The last thirty metres of the electrical chain are where capacity becomes usable. Look at the chain at the top. The UPS output switchboard feeds an LV board, PDU or remote power panel. That feeds a busway with tap-off boxes. A tap-off box is a plug-in unit that connects a rack to the busway. A short cable called a whip, or a rack PDU, delivers power to the servers' power supplies.

The elevation drawing shows the topology. Two busways run above a row of racks, A in amber and B in teal. Each rack takes one feed from each, so that if one path fails, every server still has the other. This is the physical form of two-N distribution that we cover on the redundancy slide.

The key learning is that this is a chain of ratings. Any link can be the thinnest. The tap-off box has an amp rating. The whip has a size. The rack PDU has a breaker. A site may have a huge UPS and a perfectly good board, and still be unable to serve a rack of high-density GPUs because the final links were specified for air-cooled servers. That is why density is a diligence question for the physical path as well as for the cooling.

On quantity drivers, this layer scales with amps, fault rating, circuit count, metres of busway and cable, and rack count. That is why it is often the least well captured item in a top-down dollars-per-megawatt number.

On evidence, the historical cost plan gives us supply-only prices for main LV switchgear, about thirty-one to thirty-two pounds per amp at four and five thousand amps, and a PDU at twenty-three thousand pounds for a six hundred and thirty amp, twenty-four-way unit. Those exclude lifting, cranage and factory and site testing, and installation is a separate trade. On the current side, individual commodity breakers have public prices, a few dollars each. Do not read across. The ontology notes that switchboards and busway assemblies remain quote-based. A cheap breaker inside an expensive assembly tells you nothing about the assembly.

[NEXT SLIDE]

## Slide 13: Redundancy changes how many units you buy at each layer

[SLIDE 13 ON SCREEN]

Redundancy is the most misused word in data centre finance, so let us make it concrete with a simple example. A four megawatt load, served by one-megawatt UPS modules.

In an N design you buy exactly what you need. Four modules. If any one fails, you lose capacity, and the load is exposed. If any shared component such as the bus fails, the load is down.

In an N+1 design you buy one extra module, five in total. You can lose one module and carry on. You can also take a module out for maintenance. The five modules also feed a shared bus. If the bus fails, the load fails. N+1 protects against component failure and does not protect against the failure of the thing everything shares.

In a 2N design you build two entire paths, each able to carry the whole load on its own. Eight modules in this example, with separate buses, and a dual-fed load. You can lose a whole path and keep running. You can maintain one path while the other carries the load. It is the most expensive and the most resilient. In practice it is applied at specific layers with real choices at each.

The table summarises it. Modules bought are four, five and eight. Notice the jump from five to eight. The step from N+1 to 2N carries a real cost that varies with the layer. It depends on which layer you apply it to.

The finance consequence is that you should never apply a redundancy uplift as a single percentage to total capex. Generators, UPS, distribution boards, chillers and room cooling units can each have their own topology. The reference facility in the 2019 CIBSE and AECOM cost model is a four-and-a-half megawatt Tier III design, with room cooling units at N+2 and chillers at N+1. The cost plan from 2021 prices indirect air units at N+2 per hall. Those are layer choices, and you will see their effect in counts. When someone quotes a Tier rating, ask which layers carry which topology, and whether the quoted capacity is before or after the redundancy.

[NEXT SLIDE]

## Slide 14: Heat has to be captured, carried and finally handed to the outside air

[SLIDE 14 ON SCREEN]

The thermal chain is harder to see than the electrical chain, so we will draw it carefully. The job is simple. Take heat from where it is made, carry it somewhere, and give it to the outside air. Every step in the chain exists because heat only flows from hot to cold, and the outside air can be only so cold.

The top row is the familiar air-cooled path. The IT equipment turns almost all the power it draws into heat. Server fans push hot air out of the rack. A room cooling unit, a CRAH or a fan-wall, has a coil carrying cold water. The hot air passes over the coil, gives up its heat and returns cool. The water now carries that heat through pumps and pipes, called the hydronic loop, to the chiller. A chiller is a refrigeration machine. It uses a compressor and refrigerant to lift the heat to a temperature at which the outside air can accept it. A heat rejection device, a condenser, dry cooler or cooling tower, finally blows outside air over a coil to carry the heat away.

The bottom row is the liquid path. Here cold plates sit directly on the hottest chips. Coolant flows through manifolds and flexible hoses with quick-disconnect couplings. A coolant distribution unit, the CDU, keeps the rack loop separate from the facility loop and exchanges heat between them. The facility water then goes to heat rejection. Because liquid can run warmer, some designs reject heat with dry coolers alone for much of the year. Do not assume that, as it depends on the design and the climate.

The labels at the bottom of each box are ontology branches. F is central plant, G is white-space air cooling, H is liquid cooling.

The three cards on the bottom give the finance lens. First principle: kilowatts of IT become kilowatts thermal, so cooling is sized to heat. Second: design temperature is a choice with cost consequences. The reference cost plan sizes chillers for twenty-one to thirty-one degree water with twenty percent glycol. Third: central plant is shared, while capture differs. That is why a liquid-cooled hall and an air-cooled hall can share a plant and still have very different white-space capex.

[NEXT SLIDE]

## Slide 15: A chiller is one box inside a plant, and each quote draws the box differently

[SLIDE 15 ON SCREEN]

Start on the left with the refrigeration cycle, the beating heart of a chiller. A refrigerant gas circulates in a closed loop through four components. The evaporator is where cold refrigerant absorbs heat from the building's chilled water, which returns warm and leaves cool. The compressor raises the refrigerant's pressure and temperature, so it is hotter than the outside air. The condenser then rejects that heat to the outside air, using fans on an air-cooled chiller. The expansion valve drops the pressure, which chills the refrigerant again, and the cycle repeats. The ontology holds four chiller types, differing in compressor and in how they reject heat.

On the right is the part people forget. A chiller does not work alone. Water has to be moved, cleaned, kept in volume and protected. A primary pump with a variable-frequency drive circulates it. Strainers and an air and dirt separator protect the system. A buffer tank smooths load. An expansion vessel absorbs volume changes as temperature moves. A glycol fill and treatment skid keep the fluid safe. Plate heat exchangers and an economiser can provide free cooling when the weather helps. All of this is hydronics.

Commercially, this is a package puzzle. The ontology has a packaged pump room line, F-026. If a vendor sells a pump skid, the pumps, drives, vessels, separators, strainers and controls may all be inside. The package controls freeze that as conditional on the vendor bill of materials.

Now the strip at the bottom is a lesson in scope. On the left, a chiller at three hundred pounds per kilowatt thermal, from the 2021 cost plan. On the right, a chiller line at eight hundred and ninety pounds per kilowatt of IT load, from the 2019 CIBSE and AECOM cost model. They look like two prices for one thing. They differ on four counts. The units differ, kilowatt thermal against kilowatt of IT. The scope differs, a supply-only chiller against chillers plus chilled-water pipework, pumps and associated plant. The year differs. The redundancy differs. The ontology flags the second as a multi-component package that includes more than the chiller. Never put them in the same column.

[NEXT SLIDE]

## Slide 16: Three cooling architectures, priced as installed packages, per kW of IT

[SLIDE 16 ON SCREEN]

This chart shows the best installed-package cooling evidence in the ontology. The 2019 CIBSE and AECOM cost model prices three cooling options for a reference four-and-a-half megawatt, Tier III data centre. Each bar is a total installed cost per kilowatt of IT load, built from components.

The conventional option is room cooling units at two hundred and forty pounds, air-cooled chillers with pipework, pumps and associated plant at eight hundred and ninety, and controls and power supplies at three hundred and twenty. That sums to fourteen hundred and fifty pounds per kW of IT. The indirect air cooling option is units at seven hundred and sixty, a process water and ductwork support package at two hundred and twenty, and controls at two hundred and eighty, for twelve hundred and sixty. The hybrid option is a hybrid cooler with water-cooled chillers and networks at eleven hundred and thirty and controls at three hundred and fifty, for seventeen hundred and twenty.

A careful reader will notice that eleven hundred and thirty plus three hundred and fifty is fourteen hundred and eighty, not seventeen hundred and twenty. The difference is two hundred and forty. That matches the room cooling line in the conventional option, so the likely explanation is that room cooling is part of the hybrid total and was not extracted as a separate line. I have drawn it as the lighter violet block and labelled it as implied. That is my inference and no source figure. The total is the anchor.

Three rules from the ontology. Use the total or the components, never both, because the package controls suppress one when the other is active. The eleven hundred and thirty figure belongs to the hybrid option and must not be used as the conventional total, which an earlier research pass did by mistake. And controls matter. At roughly a fifth of each total, they are a material line that is easy to omit.

At the bottom right is a scaling illustration. Multiply the per-kW rates by forty-five hundred kilowatts and you get roughly six and a half, five and a half, and seven and three-quarter million pounds. That is the 2019 reference facility, in 2019 money. This answers 'what did one design cost to install in 2019?' and leaves 'what does cooling cost today?' open. Escalating it is a separate, explicit step. It is historical evidence.

[NEXT SLIDE]

## Slide 17: Three ways to cool a hall with air, each moving the heat differently

[SLIDE 17 ON SCREEN]

Three different ways to cool a hall with air. The common job is the same. Keep the cold aisle cold, remove the hot aisle's heat, and avoid mixing the two.

On the left is the classic design. A computer room air handler, a CRAH, stands at the edge of the hall. It blows cold air into the void under a raised floor. Perforated tiles let it rise into the cold aisle in front of the racks. Servers pull it through, and the heated air rises at the back, returns overhead and goes back to the CRAH coil, which is cooled by chilled water from the central plant. Containment panels in the ontology stop hot and cold air mixing.

In the middle is a fan wall. A wall of electronically commutated fans sits in front of a cooling coil and pushes cooled air across the hall, in place of a few big air handlers. Many small fans give resilience and fine control. The heat still leaves by chilled water.

On the right is indirect air cooling. The hall air stays in a closed loop. It passes through a large air-to-air exchanger, and outside air passes the other side, never mixing. When the weather is cool enough, outside air does all the work. The ontology notes that chillers may only trim, and the cost plan describes a trim chiller used about one percent of the year in one hybrid design.

The quantity driver for all three is kilowatts of sensible cooling and the redundancy count, N+1 or N+2. Sensible means the ordinary temperature-changing heat, as opposed to humidity-related latent heat.

On pricing, the evidence is historical and uneven. The 2021 cost plan has a DX CRAC at six hundred and sixty pounds per kW, and note that it is a plantroom unit, a different item from a white-space CRAH. Indirect air cooling units come in cheaper per kW than direct air in that plan. One line, the three-hundred-and-fifty-seven kW unit, includes controls, spares and training, and the ontology says you cannot compare it with the others on kW alone. Public current pricing for CRAHs and fan walls is scarce. Treat everything here as shape.

[NEXT SLIDE]

## Slide 18: Direct-to-chip cooling brings the coolant to the chip itself

[SLIDE 18 ON SCREEN]

Direct-to-chip cooling is the technology behind high-density AI racks. The idea is simple. Put the coolant on the chip.

In an air-cooled server, fans push air over heat sinks and the heat ends up in the room. In direct-to-chip, a metal cold plate sits on the hottest chips, the CPUs and GPUs. Coolant flows through it and carries heat away through tubes. On the diagram the small teal squares are cold plates. Blue tubes bring cool coolant to them and red tubes take warm coolant away. Vertical manifolds on each side of the rack distribute and collect it. Quick-disconnect couplings, the amber dots, let operators pull a server out without draining the system. A row manifold at the bottom gathers the flow from several racks and sends it to the CDU, which we look at next.

Why bother? From first principles, water holds more than three thousand times more heat per unit volume than air. That is why a thin pipe can carry what takes a roar of fans in air. It lets rack densities rise beyond what air can handle. The orange arrow on the left is a reminder that cold plates take the hottest chips. Memory, drives and power supplies still shed heat into the air, so you still need some air cooling. Hybrid is the normal case.

For quantity drivers, three things scale differently. Cold plates, manifolds and quick-disconnects scale per rack. CDUs scale with thermal load. Coolant scales with litres, the volume in the loop.

Commercial risk is the distinction between liquid-ready and liquid-installed. A hall can have the space, the pipe routes and the plant capacity, and still have no cold plates in any rack. Responsibility is shared. The server maker owns the plates, the rack integrator the manifolds, the facility the CDUs and pipework, and the customer the hardware warranty. When a leak happens, who pays is a contractual question that diligence should answer in advance.

On evidence, the red badge applies. Public prices for liquid cooling are very weak and tenders are only emerging. The ontology flags the plates, the manifolds and the CDU family as provenance evidence of what exists and no price evidence. So no number is shown on this slide, deliberately.

[NEXT SLIDE]

## Slide 19: A CDU is a heat exchanger with pumps, filters and a brain

[SLIDE 19 ON SCREEN]

This is the slide that turns a black box into a system. A coolant distribution unit, the CDU, sits between the delicate rack loop and the facility's water.

Start with the two loops. On the left in amber and blue is the technology loop, sometimes called the secondary or TCS loop. It carries clean, controlled coolant to the racks and returns it warm. On the right in teal is the facility water loop, which carries the heat to the plant. The two loops never mix. Heat crosses the thin metal plates of the plate heat exchanger in the middle.

Why separate them? Because the chips need a very clean, chemically controlled fluid at a stable temperature. Building water is dirtier and shared. The CDU is the gatekeeper.

Now the components inside, which are all ontology lines. A pump module with duty and standby pumps keeps the coolant moving. A filtration module catches particles. An expansion or buffer tank absorbs volume changes. An air separator and fill and make-up keep the loop topped up and free of bubbles. A control valve on the facility side modulates how much facility water flows, which controls the coolant temperature. A controller or PLC runs all of it. Coolant-quality sensors and leak detection watch for trouble and can trigger alarms or shutdown.

Why does a banker need this? Because 'CDU' names a product family and defines no scope. It might mean a small box in a rack, a unit between two racks or a plant-room skid serving a whole hall. A quote for a CDU may include the pumps, the heat exchanger, the filters and the controls, or some of them. If you price pumps and controls separately and the quote already contains them, you pay twice. If the quote excludes them and you assume it includes them, you under-budget.

Quantity drivers follow thermal load. A CDU is rated in kilowatts thermal. How many you need is thermal load divided by unit capacity, plus redundancy. The manufacturers we see disclose redundant pumps, filtration and controls as part of the architecture, which tells us what is inside. It does not tell us the price.

[NEXT SLIDE]

## Slide 20: No CDU scope is frozen, so every quote needs a bill of materials

[SLIDE 20 ON SCREEN]

Compare this slide with the generator and UPS package slides. There, the ontology froze rules about which children sit inside the parent price. For CDUs it has not. That is why every chip on the hub is white or grey. No inclusion rule exists, so no assumption is safe.

The left side shows three forms of CDU. An in-rack CDU serves one rack and scales per rack. An in-row CDU serves a row or a block of racks. A facility-scale CDU serves a larger thermal block, typically in a plant room. The ontology classifies the first as a per-rack driver and the other two as per thermal block. The bars are symbolic. They show only that these are different scales.

On the hub, the left chips are items that may sit inside a CDU quote. Pump module, plate heat exchanger, filtration, controller, coolant-quality sensors, leak detection, expansion tanks and the air separator. The right chips are items usually outside, such as the row manifold, hoses and quick-disconnects, and the first coolant fill, which is a volume driver. Those are tendencies and no rules. The only way to settle the boundary is to read the vendor's bill of materials.

Four diligence questions are listed. Which of the internal parts are in the price? Is redundancy inside the unit, for example duty and standby pumps, or created by buying extra units? Who supplies the coolant and the first fill? Who owns the warranty if a hose, a coupling or the fluid fails? Notice that all four are about boundaries and responsibilities. None is about price.

On evidence, the current public price for CDUs is very weak, and the ontology records it as a gap. Where manufacturers publish architecture, such as redundant pumps and filtration, that evidence helps you build a checklist. It does not give you a unit rate. A quote or a tender return, with scope stated, is what you need. Until then, carry a clearly labelled placeholder range or exclude the item from the point estimate and flag it.

[NEXT SLIDE]

## Slide 21: Rear doors extend air halls, and immersion replaces air altogether

[SLIDE 21 ON SCREEN]

Two more liquid approaches, at opposite ends of the commitment spectrum.

On the left, the rear-door heat exchanger. This is a radiator mounted on the back door of a normal rack. Servers still push hot air out the back. That air then passes through a water-cooled coil before it re-enters the room. The result is that heat is caught as it leaves the rack, and the hall can stay an air-cooled hall. A passive door has no fans and relies on the servers' own airflow. An active door adds fans, controlled by a valve and control unit. Because the rack stays a normal rack, rear doors are a common way to extend an existing air hall to higher density without rebuilding it. Water comes from the facility loop, which means water now runs to the back of each rack.

On the right, immersion cooling. Servers sit in a tank of dielectric fluid, a liquid that does not conduct electricity. The fluid carries the heat away from every component at once. A pump circulates the fluid through a filter and a heat exchanger or CDU, which hands the heat to facility water. Single-phase fluid stays liquid. Two-phase fluid boils and condenses. The service tools are part of the system, a hoist to lift servers out, a fluid cart, drip trays and storage for fluid.

For finance the questions differ. For rear doors, ask whether the doors are passive or active, what the door water temperature is, and who is responsible for leaks near live equipment. For immersion, ask what fluid is used and in what volume, because fluid is a quantity driver in litres and a long-lived asset. Ask about floor loading, since tanks are heavy. And ask about hardware compatibility and warranty. Not every server vendor will warrant immersed hardware, and a customer base that cannot use the tank limits its value.

On evidence and lifecycle, the ontology says no public numeric price is available and, for fluid, it holds only qualitative service evidence. It specifically warns against turning a statement about scheduled fluid checks into an unsupported fluid life. So this slide has no numbers. That is the correct amount of numbers.

[NEXT SLIDE]

## Slide 22: Most real halls mix technologies, so liquid-ready needs three tests

[SLIDE 22 ON SCREEN]

Almost no modern hall is pure. A hall serving AI training racks usually has liquid where the density is high and air for everything else. Three tests help you read what a seller says.

Follow the decision tree on the left. First, can air cooling serve the planned density? If yes, build or keep an air hall. CRAHs, fan walls or indirect air units do the job. If no, the next question is whether this is an existing air-cooled hall. If yes, rear-door heat exchangers are the usual way to extend it, because they keep the rack and the room largely as they were. If no, ask whether the customers' hardware vendors accept immersion. If yes, immersion is an option. If no, the default for a new purpose-built high-density hall is direct-to-chip cooling with CDUs, plus air for the components that still need it. The ontology has a hybrid air-liquid rack enclosure line for that case.

This tree is a teaching simplification. Real decisions weigh climate, power availability, customer mix and cost. Use it to ask 'which branch is this site on, and is that consistent with what the seller claims?'.

On the right is the part that matters most for valuation. Liquid-ready is a ladder with three rungs. Rung one is space and structure. Floor loading, riser routes and plant space are reserved. Rung two is plant and pipework. Headers, risers and plant capacity are installed and tested, and space for CDUs exists. Rung three is liquid installed. Cold plates, manifolds, CDUs and fluid are in service and commissioned. Each rung is separate capex, and each is a separate claim. A seller who says the site is liquid-ready might mean rung one.

The evidence strip shows why architecture matters. In the 2021 cost plan for a twenty megawatt hall, the chilled-water installation line is three hundred and twenty thousand pounds in the direct-air case, and five point seven million pounds where chillers serve the hall. The choice of technology moves installation cost as well as plant equipment. It is a London, 2021 cost-plan number, so use it for shape.

[NEXT SLIDE]

## Slide 23: Fire protection is zoned by what burns and what water would destroy

[SLIDE 23 ON SCREEN]

Fire and life safety is an assurance system that lets the building be insured, permitted and operated.

The plan view shows why a data centre has several different fire strategies. Fire protection is zoned by two questions: what could burn here, and what would suppression damage here? Water in a switchgear room is itself a hazard.

Data halls typically use very early smoke detection, an aspirating system sometimes called VESDA, which pulls air through sampling pipes to a sensitive detector. Suppression is either a clean agent gas or a pre-action sprinkler, which keeps pipes dry until detection confirms a fire. Electrical rooms use detection plus clean agent. The battery room is its own problem. It needs ventilation for gases from lead-acid batteries, and, for lithium-ion, a suppression and detection interface. The ontology lists both ventilation and fire-detection interface as separate lines under the UPS branch. The generator area is about fuel. The control room hosts the fire alarm panel and the firefighter interface. Outside the building sit the fire-water tank and pumps.

On the right is the chain of events. Detectors sense smoke or heat. The alarm panel decides. The releasing panel triggers agent cylinders or opens a valve. Interfaces shut dampers, start smoke extract and stop HVAC so the agent stays in the room. Then, importantly, someone proves it, through discharge and interface tests witnessed by the authority.

For finance, three points. First, fire systems are mostly installed scope. Small devices have public prices. The system is the installation, and it is priced as a package. In the 2021 cost plan for a twenty-megawatt hall, gaseous and fire suppression installation is one point seven two million pounds and detection and alarm another three hundred and eighty thousand. Those are installed trade lines. Second, lifecycle intervals are driven by code, which varies by jurisdiction, and the ontology marks lifecycle evidence for fire as a gap. Third, acceptance matters. A site without a clean sign-off from the fire authority and the insurer is not bankable, regardless of how good the hardware is.

[NEXT SLIDE]

## Slide 24: Controls hardware is cheap and public, and the integrated system is neither

[SLIDE 24 ON SCREEN]

Controls and monitoring are the nervous system of the data centre. They are easy to dismiss as a small line, and for hardware they are. Let us separate layers.

At the bottom are field devices. Temperature, humidity, pressure and flow sensors. Fuel-level sensors. Actuators that move valves and dampers. Meters. Above them are controllers. A programmable logic controller, or PLC, runs a control loop, such as keeping a chilled-water temperature. Remote I/O modules and direct digital controllers extend that reach. Above them is a network layer of gateways and protocol converters, which let equipment from different manufacturers talk. Above that sit the supervisory systems. A building management system, the BMS, supervises mechanical plant. An electrical power monitoring system, the EPMS, supervises power through meters and monitors. At the top is DCIM, data centre infrastructure management, which tracks capacity, assets and customer reporting. Data flows up. Commands flow down.

Now the finance point, illustrated by the iceberg. Above the waterline is what you can see in a public catalogue. A PLC CPU costs a few hundred dollars. A base rack costs a hundred or two hundred. These are strong, structured, current observations. The ontology rates controls as one of the strongest public price categories.

Below the waterline is the system. The 2021 cost plan carries two point seven six five million pounds for controls, head ends and control-system wiring on a twenty megawatt hall, and that number is the same in every cooling scenario. The 2019 CIBSE and AECOM model carries three hundred and twenty pounds per kW of IT for BMS controls and power supplies to mechanical plant, which is about one point four four million pounds at four-and-a-half megawatts. Those are installed, integrated packages. Software and DCIM package prices are weak in public sources.

The lesson is about scale mismatch. Do not price a controls system by multiplying a catalogue PLC price by a point count. The cost is in design, programming, integration, testing and commissioning. And controls obsolescence is different from physical wear. The ontology says to model it separately. Ask who owns the licences and the configuration, because a buyer who cannot change the controls without the vendor is exposed.

[NEXT SLIDE]

## Slide 25: Connectivity and rack space are what the customer actually buys

[SLIDE 25 ON SCREEN]

This slide is about what the customer actually buys. A data centre sells more than power and cooling. A colocation customer rents space and connectivity.

Along the top is the physical path of a fibre. Carriers enter the building through diverse entrances, two routes at two entry points, so one dug-up duct does not isolate the site. They land in the meet-me room, where carriers and customers interconnect, using carrier racks and optical distribution frames. Cross-connect frames and demarcation cabinets mark the boundary of responsibility. Fibre trunks run through overhead raceways into the white space, and at the rack, patch panels, cassettes and patch cords terminate the cable.

The steps below show the product ladder. A customer might rent a single rack, a locked cage, a private suite or a whole hall. Each step commits more kilowatts, and billing is usually in kilowatts or megawatts. For a lender the commercial unit is committed and drawn power with cooling and connectivity attached.

Two commercial points. First, scope. The 2021 cost plan explicitly excludes IT racks, containment, data cabling and servers from the build. In a colocation model the landlord often provides shell, power, cooling and base connectivity, and the tenant provides racks and servers. Be clear which fit-out capex a buyer inherits. Second, connectivity is hard to replicate. A carrier-dense building with diverse routes earns cross-connect revenue and attracts customers who value latency and choice. That is value that sits outside the pure replacement-cost analysis, and it is a reason buy can beat build.

On evidence, passive fibre components have strong, current public prices. The ontology preserves a Chinese catalogue price for a twenty-four fibre adapter panel in its native currency, not converted. As with controls, a component price is a tiny part of an installed pathway. Do not build a connectivity cost from catalogue parts.

[NEXT SLIDE]

## Slide 26: The same site can have eight different megawatt numbers

[SLIDE 26 ON SCREEN]

This is the slide that stops megawatts being used loosely. A single site can honestly be described with eight different megawatt numbers, and they are all real.

Step one is the utility connection, the contracted capacity. Step two is energised capacity, live and approved. Step three is the facility's electrical load. This includes cooling, losses and everything else. It equals the IT load multiplied by the power usage effectiveness, or PUE. Step four is the designed critical IT capacity, the kilowatts delivered at the rack. Step five is redundancy-adjusted capacity, the N-available amount after reserve modules and paths are taken out. A hall with sixty megawatts of installed UPS modules in 2N might carry only about thirty megawatts of usable load. Step six is commissioned capacity, where an integrated test has passed under load. Step seven is contracted capacity, what customers have signed for. Step eight is billing capacity, what is actually drawn or billed.

The colours group the steps. Amber is mostly electrical supply. Teal is design and test. Violet is commercial. The bars fall to the right to show that capacity is removed or proved at each step. The scale is schematic. Real values do not fall in a perfectly smooth sequence.

The worked example is simple arithmetic. If twenty megawatts of IT run at a PUE of one point three, the facility draws twenty-six megawatts. The extra six megawatts goes to cooling and losses. That is why a grid connection quoted in megawatts and a revenue capacity quoted in megawatts are not the same thing, and the gap between them is a design variable.

For diligence, make it a habit. When a seller or a model uses megawatts, ask which of the eight. When you compare capex per megawatt across assets, check that the denominators match. A cost per grid megawatt and a cost per billing megawatt can differ by a large factor in the same building. Most disagreements about cost per megawatt are really disagreements about which megawatt.

[NEXT SLIDE]

## Slide 27: Commissioning is the proof that converts installed equipment into capacity

[SLIDE 27 ON SCREEN]

Commissioning is the single most important concept in this assurance section, because it converts installed equipment into capacity a customer can use and a lender can rely on.

The bars show the usual levels. Level one is factory witness testing. Engineers watch the manufacturer test the equipment before it ships. Level two is delivery and installation checks, confirming it arrived undamaged and was installed to specification. Level three is start-up and energisation. Level four is functional performance testing, system by system. Generators, UPS, chillers and CDUs are each run through their modes, often with load banks, which are devices that consume power and generate heat to simulate the IT load. Level five is the integrated systems test, the IST. Everything runs together under full heat load, and engineers inject failures to prove the redundancy works. They pull a utility feed, trip a generator, fail a chiller. Then comes handover, with training, operation and maintenance documents and critical spares.

Below the Gantt are the five commercial states. Included, housed, installed, commissioned, accepted. Think of them as a ladder. A megawatt is only bankable at the commissioned and accepted rungs. A seller who says the capacity is installed may not have run the integrated test. A model that books capex when equipment is included in a price, or housed in a module, and revenue when it is installed, is mixing rungs.

The red box makes a quiet point from the historical cost plan. The itemised Level one to five testing lines, mechanical and electrical, total about four hundred and twenty-six thousand pounds in the direct-air case. That is roughly point four percent of the one hundred point five million pound scenario cost. It is a tiny cost line that gates the revenue of the whole facility. Treat commissioning as a risk item. The ontology also carries load banks and critical spares, branch O, as maintenance and commissioning assets.

For diligence, ask for the integrated systems test report, the open-defects list, whether seasonal tests were done, and whether the test covered the final configuration or an earlier phase.

[NEXT SLIDE]

## Slide 28: Every price source is born at a different stage of procurement

[SLIDE 28 ON SCREEN]

To judge a price you need to know where in the buying process it came from. Equipment is bought in stages, and every stage creates a different kind of evidence.

Start on the left. A design basis and specification define what is needed. The buyer sends a request for quotation to manufacturers and gets budget quotes. Those are OEM prices. In the ontology's evidence taxonomy this is commercial authority level three, usually equipment only and not installed. Next, a tender return or a quantity surveyor's cost plan gives a project cost. That is level two, strong project evidence that may differ from an executed price. Then there is often a slot reservation and a deposit, because manufacturing capacity for transformers, generators and large UPS is scarce. This is where lead time bites. After that comes the award or purchase order. An executed award is level one, the strongest commercial evidence, and it may still be a broad package. Then factory test, delivery, installation, commissioning, and finally the final account, the audited actual cost, also level one.

The two bars show why you must not mix stages. A real chiller replacement project was awarded at about three point five five million pounds. The same project later carried a value of about four point five two million, an increase of twenty-seven percent. Both numbers are real. The first was the commitment, the second was closer to what happened. The ontology warns that a change notice on the same project is not an independent observation, so do not count both as two data points.

For diligence, you should always ask three things about any price. Which stage produced it? Which scope does it cover? And has the number moved since? If a seller shows you a budget quote, you are looking at a stage-two number. If they show you a final account, you are looking at stage eight. And be aware of the lead-time zone. A buyer or a developer planning a new build is exposed between award and delivery, and a buyer of an operating asset is protected from it, which is part of the buy-versus-build argument later.

[NEXT SLIDE]

## Slide 29: Five grades of commercial evidence, and each one has a job

[SLIDE 29 ON SCREEN]

The ontology's evidence taxonomy grades commercial evidence in five levels. Think of it as a ladder where each rung has a job. It also tags evidence along other axes: technical authority, admissibility, whether it is current or historical, and whether it can be normalised. We focus on the commercial ladder because it answers 'how much should I trust this price?'.

The top rung, level one, is an executed award, contract, paid schedule or audited actual. It is the strongest because money changed hands. Note the warning on the slide: it may still be a broad package. The Cardonald generator award is a real executed price for a generator with wiring and switchgear, and it does not state the rating, so you cannot turn it into a pounds-per-kW rate. The Southern Water framework lot of four point eight million pounds for UPS supply and install across a region tells you scale and offers no unit rates.

Level two is a tender return, a procurement schedule or a formal quantity surveyor's cost plan. Two of the main sources in this course sit here. The EXCOOL cost plan from the second quarter of 2021 and the CIBSE and AECOM cost model from 2019. I class both as level two on my reading of the taxonomy, since each is a formal cost plan or engineering cost model, so treat that classification as mine. The ontology's own label for both is admitted historical. They are strong project-cost evidence for package shape, historical anchors and scaling relationships. Treat both as historical.

Level three is an OEM, list or distributor public price. It is usually equipment-only. The small rack UPS price and the PLC catalogue prices are here. Level four is a marketplace ask, a rental, surplus or a case study. The generator listings fall here. It is calibration only. Level five is a generic estimate or analyst assumption. It is an allowance.

The dashed box at the bottom matters. Aggregate benchmarks such as the Turner and Townsend cost index, the RLB trends reports and the Arcadis cost reports, plus any dollars per watt figure, are valuable for sanity-checking a total build cost. The ontology limits them to reconciliation. Use them to ask whether a bottom-up sum is plausible, and never to generate a transformer price.

A final practical rule. Any number in your model should carry its rung, its date and its scope. If you cannot write those three things next to it, it is not ready to be relied on.

[NEXT SLIDE]

## Slide 30: Main plant is only about a third of the installed build

[SLIDE 30 ON SCREEN]

This chart is the clearest picture in the course of the gap between an equipment price and an installed cost. It comes from the 2021 EXCOOL cost plan for a twenty-megawatt data centre in London, priced under five different cooling designs. Everything is in millions of pounds in second-quarter 2021 money.

The amber block at the bottom of each column is main plant supply, meaning transformers, switchgear, UPS and batteries, generators, chillers and the like, bought directly by the client and supplied to the contractor. Look at its size relative to the total. It is between thirty-two and thirty-seven percent in every scenario. Two-thirds of the cost is something else. Civil, structural and architectural work, mechanical and electrical installation, support and administration space, and the general contractor's preliminaries and overheads and profit.

That is the practical meaning of the difference between an equipment price and an installed cost. Take a quote for a generator or a UPS and you have bought the amber block. To get the data centre you add everything else. The cost plan itself lists fifty-two numbered lines, including installation, cabling, containment, builder's work, testing and commissioning. The ontology you have been using describes the equipment. The installation layer is deferred to a separate construction and installation ontology, which we call DR03 later in the course.

Second observation. The cooling architecture moves the total by up to about twenty-six million pounds, or twenty-six percent of the lowest case. The fan-wall and chiller case costs more than the direct-air case, in both plant and installation, since it needs chilled-water pipework and chillers. Architecture is a major capex lever, which is why the cooling slides came before this one.

Third observation. The implied cost per megawatt in this plan ranges from about five to six point three million pounds. That is a useful benchmark to reconcile a total against. The ontology says plainly that it must not be used to price components.

Finally, the box in the bottom right is a reminder of scope. The plan excludes land, off-site utilities, IT fit-out, fees, finance, VAT and construction inflation. It also has an unresolved internal inconsistency. Its notes say office and admin areas are excluded, and the summary includes a seven and a half million pound line for them. The ontology preserves that as an open quality flag. This is a historical anchor with known limits, .

[NEXT SLIDE]

## Slide 31: A historical anchor is useful for shape, and a price only after explicit steps

[SLIDE 31 ON SCREEN]

This slide is the discipline that keeps you from the most common historical-data mistake. Using an old price as if it were today's.

The timeline shows two historical anchors. The 2019 CIBSE and AECOM cost model and the second-quarter 2021 EXCOOL cost plan. The model date is early October 2026. The ontology states the EXCOOL plan is about five point four years old, and records that no automatic escalation from 2021 to 2026 has been applied. The escalation factors are left as explicit inputs, deliberately blank. The CIBSE model is older still.

The workbook calls these anchors admitted historical. That label has a precise meaning. They are valid evidence in their native scope, and they are never a current price without an explicit currentisation step.

The five steps show that currentisation is more than multiplying by an index. First, align scope. A supply-only cost plan line and an installed package are different things. Second, align units. Kilowatts thermal, kilowatts of IT, kVA and amps are different drivers. Third, the date. Choose an index, as an explicit and visible input, with a rationale. Fourth, geography. London in 2021 differs from a mid-sized European market in 2026. Fifth, reconcile the result against current evidence, such as recent awards, fresh quotes and benchmark totals, and see whether it holds up.

The output must carry its status. A currentised estimate is an engineering allowance. It should be labelled as one. It must never be re-entered in the model as if it were an observed price, because that would launder a historical number into a current one.

The two cards give the arithmetic and the good news. The formula has no hidden pieces. If you assume ten percent escalation, the thirty-pounds-per-kVA transformer anchor moves by three pounds. That arithmetic shows how sensitive the answer is to the index you choose, and forecasts nothing about transformer prices. And the good news is that some things survive age well. Ratios inside one cost plan, such as the generator rate being broadly flat at three hundred and six to three hundred and nineteen pounds per kW across three sizes, tell you about scaling and shape even when the level is out of date.

[NEXT SLIDE]

## Slide 32: Eight errors that overstate, understate or falsely sharpen capex

[SLIDE 32 ON SCREEN]

This is the checklist to use on any model you are handed. Each of these errors is real, and each has a control in the ontology.

One, parent plus child lines. If a quote for a generator set, a UPS or a transformer bay already contains its children, adding the children as separate lines double-counts. The package controls handle this case by case and keep children for lifecycle even when they are suppressed for acquisition cost.

Two, housed is counted as included. A prefabricated module physically houses equipment. Its price may still exclude it. Only the bill of materials can say.

Three, units swapped. Kilowatts thermal, kilowatts of IT, kVA, amps and kilowatts sensible are different drivers. A price per kilowatt thermal applied to kilowatts of IT mixes two quantities that differ by the plant's efficiency. Each line should be modelled in its native driver.

Four, historical evidence read as current. The EXCOOL plan is from 2021 and the CIBSE model is from 2019. They need explicit currentisation.

Five, equipment treated as installed. We saw that main plant is roughly a third of the installed build in the reference plan.

Six, a benchmark used to build components. A dollars-per-watt figure is a total. Dividing it across equipment lines produces numbers that look precise and mean nothing.

Seven, a small price scaled to megawatts. A ten kVA retail UPS price is real and current, and it is the wrong scale. Scaling effects, project engineering and bundled scope all change the economics.

Eight, observations blended or doubled. The ontology says explicitly not to average a list price and a reseller price, and not to count an award and a later change notice on the same project as independent.

For a quick test, take a model and ask three questions of every cost line. What is its driver, and does the unit match the quantity? What is its source rung, date and scope? And what children might already be inside it? If any answer is blank, you have found your next diligence request.

[NEXT SLIDE]

## Slide 33: Where to spend diligence time: risk differs by system and by dimension

[SLIDE 33 ON SCREEN]

This is a triage map. It tells you where diligence time pays off, system by system. Be clear about what it is. The first five columns are my analyst judgement for a typical new build, intended to focus your questions. Treat them as hypotheses and challenge them. The last column, current-price gap, follows the ontology's gap profiles, which record where public price evidence is weak.

Read down the columns. Capex weight is high for the big power and cooling plant: HV and transformers, generators, UPS, chillers and liquid cooling. Fibre and white-space hardware is low. Lead time is highest for the equipment that few factories make at scale, namely HV equipment, transformers and generators. The ontology's benchmark sources, such as the RLB data centre trends reports, give supply-chain context on production-slot pressure. The ontology itself holds no numeric lead times, so none are shown.

Double-count risk is highest where package controls exist. Generators, UPS, chillers with pump skids and CDUs. Commissioning risk is highest where integration is heavy. Generators and UPS must prove their handshake, fire systems need witnessed tests, controls need integration testing, and liquid cooling is newer. Lifecycle risk is highest for batteries, which can need up to full string replacement with an interval the ontology marks unknown, and for controls, where obsolescence is different from physical wear. Fire lifecycle is code-driven and the ontology marks it as a gap.

The final column is the sobering one. Almost every large system carries a high current-price gap. Generators and controls have some public calibration evidence, and the rest do not. That means the highest-value diligence requests are for quotes, tenders and awards with scope, in exactly the systems that dominate capex.

How to use this in practice. Pick the red cells in a target asset's biggest systems. Those are your first diligence requests. Then use the next slide's list to turn each into a specific question and a specific document.

[NEXT SLIDE]

## Slide 34: Ten questions that convert the physical system into data-room requests

[SLIDE 34 ON SCREEN]

Each of these ten rows turns a piece of physical understanding from earlier slides into a request you can put in a data room. Notice that the left column is a system, the middle is a question, and the right is a document. A good diligence request names the document, since that is what lets the seller respond and lets you check the answer.

Grid and HV and MV. Ask whether the megawatt is contracted, energised or deliverable to rack, and who owns the bay. The documents are the connection agreement, the energisation certificate and the protection study.

Transformers. Ask the MVA, the redundancy, and what is inside the quoted package. The ring main unit, metering and protection are the usual suspects. The documents are the equipment schedule, the vendor bill of materials and the factory test reports.

Generators. Ask how many hours of autonomy at what load, and what the permits allow. Running-hour limits and emissions rules can cap value. The documents are the fuel calculation, the permit and the load bank test report.

UPS and batteries. Ask runtime at today's load, chemistry and the replacement plan. Request discharge test results, battery management logs, and the warranty.

LV and busway. Find the thinnest rating between UPS and rack and compare it with today's density. Request single-line diagrams, thermal imaging and breaker settings.

Chillers and room cooling. Ask capacity at design ambient temperature, the redundancy and the spare. Request the plant schedule, the performance test and seasonal data.

Liquid cooling. Ask whether the site is liquid-ready or liquid-installed, using the three rungs, and who owns the CDUs, fluid and warranty.

Fire and safety. Ask whether the authority and the insurer accept the configuration as it is now.

Controls. Ask who owns the licences, configuration and alarm history.

Commissioning. Ask whether the integrated systems test covered the final build and whether defects are closed.

If you only have time to ask three, ask the grid question, the integrated systems test question and the liquid-readiness question. Between them they cover the three biggest gaps between a claimed megawatt and a usable one.

[NEXT SLIDE]

## Slide 35: Replacement cost sets the anchor, and time and risk move it

[SLIDE 35 ON SCREEN]

This is where the physical and commercial understanding turns into a transaction view. The question is whether it is better to buy an existing operating asset or to build a new one.

Start with column one, replacement cost today. It is the cost to rebuild the capacity from scratch. The stack uses the shares from the 2021 reference cost plan for the direct-air case. Main plant supply is about thirty-four percent. Installation across mechanical and electrical is about twenty-four. Civil, structural and architectural is about twenty. General contractor preliminaries and overheads and profit about fourteen, and support and admin space about seven and a half. The dashed box on top is a reminder that land, off-site utilities and fees are excluded from that source, and they can matter a great deal. Everything in this column is historical and must be currentised before use.

Replacement cost is the anchor. Three adjustments move the value of an operating asset away from it. Block two is the time to power and to revenue. A buyer gets capacity today. A builder waits through design, permitting, grid connection, equipment slots, construction and commissioning, and forgoes revenue meanwhile. Block three is the development risk the buyer avoids. Power may not arrive, permits may be refused and supply chains may slip. Block four is the discount for age and obsolescence. Batteries part-way through life, a design that is air-only when customers need liquid cooling, or controls that are near end of support all reduce value relative to new. The floating blocks are symbolic. The point is the structure of the argument, and you should size each block with evidence.

The right-hand cards give the heuristic. Buy tends to win when power is energised and contracted, capacity is commissioned, contracts already pay, and supply slots are tight. Build tends to win when power is cheap and available, the design is standard, customers can wait, and the land is already owned.

One last discipline. The stack gives shape. A total benchmark such as cost per megawatt reconciles the whole. Every layer you put in the stack needs its source, date and scope, using everything this course has taught about evidence.

[NEXT SLIDE]

## Slide 36: DR03 adds the installation layer the equipment ontology omits

[SLIDE 36 ON SCREEN]

The equipment ontology tells you what physical things exist, how they are packaged and what evidence prices them. It does not tell you what it costs to build the building and install the equipment. That is the job of the next layer, which the workbook calls DR03, the construction and installation ontology. The ontology explicitly defers construction and building fabric to that layer. It does not add them to the equipment list.

The four boxes on the left show the layering. First, the equipment ontology: four hundred and eighteen lines in sixteen branches, frozen at version zero point one point one. Second, package controls, which are the parent-and-child rules that prevent double-counting. Also frozen. Third, DR03, the next layer. It will cover civil, structural and architectural work, builder's work, containment and cabling, installation labour, preliminaries and overheads, and testing and commissioning. Fourth, a separate box for things outside both layers. Land, off-site utilities, fees, finance and tax.

Why does this layer matter so much? Recall the equipment-versus-installed slide. Main plant was about a third of the build. The other two-thirds sit in layers that the equipment ontology does not cover.

The chart shows what the one detailed cost plan we have offers as a skeleton. The EXCOOL plan has fifty-two numbered lines. Twelve are civil, structural and architectural. Twelve are mechanical installation. Twenty-two are electrical installation. One is support space, two are general contractor items and three are main plant supply. The three main plant lines are the ones the equipment ontology covers. The other forty-nine are what DR03 would take on. Because it is one historical cost plan, treat it as a skeleton to be completed with more sources.

The card on the right lists what DR03 must capture. Quantity drivers such as floor area, structural volume, metres of containment and cable, and labour hours. And evidence from cost plans, tender bills and awards, each mapped back to the ontology parent it installs. When that exists, the bottom-up model can be reconciled in full against a total benchmark.

[NEXT SLIDE]

## Slide 37: The five-move test: apply it to any line in any model

[SLIDE 37 ON SCREEN]

Let us end with the framework you can carry into any transaction. Five moves, applied to any line in any model.

Move one, job. What physical job does this item do, and what happens if it is missing? If you cannot say it in a sentence, you still need to study the line. Move two, driver. What sets its size or its count? Megavolt-amps, kilowatts, kilowatts thermal, runtime, rack count, metres, amps or litres. If the unit of the price does not match the unit of the quantity, the line is wrong. Move three, package. What else is inside the price, and what is outside it? Remember the four states: included, housed, installed and commissioned. Move four, evidence. Which rung of the ladder, which date and which scope? Executed award, cost plan, list price, marketplace ask or assumption. Current or historical. Package or component. Move five, risk. What can go wrong commercially? Capex, lead time, double-counting, commissioning, lifecycle replacement, customer acceptance or bankability.

The worked example applies it to a CDU quote arriving in a data room. The job is to isolate and exchange heat between the rack loop and the facility loop. The driver is kilowatts thermal or racks, with redundancy. The package is uncertain. Pumps, heat exchanger, filters and controls may or may not be inside, and no frozen rule settles it, so you ask for the bill of materials. The evidence is a quote or tender with scope, because there is no current public price. The risks are the boundary of scope, leak and warranty ownership, and lead time. In five moves you have turned a vague line into five specific diligence requests.

Finally, three rules to take away. Know the chain: power in, heat out, assurance around. Know the package: included, housed, installed and commissioned are different. Know the date: historical evidence is shape until it is explicitly currentised.

If you apply those, you will find the errors that other people miss, you will ask for the documents that matter, and you will be honest about the numbers that nobody can defend today. Thank you.

[END]

## Appendix A: Evidence rules applied

1. The physical ontology is distinct from commercial packaging.
2. Package prices may contain several ontology children, so double counting is the default risk. Package controls decide suppression, and housed is not included.
3. EXCOOL 2021 is admitted historical Q2-2021 cost-plan evidence. It is not a current 2026 price book.
4. CIBSE/AECOM 2019 is admitted historical installed package evidence against IT kW. It is not chiller-only equipment pricing.
5. Aggregate $/W or £/MW benchmarks reconcile totals. They never generate component prices.
6. Current-price gaps stay open for transformers, HV/MV switchgear, large UPS and batteries, LV equipment and busway, central cooling and liquid cooling. No current price is fabricated anywhere in the deck.
7. Included, housed, installed and commissioned are different commercial states.

## Appendix B: Source register

- **MASTER_DC_COST_ONTOLOGY_v0.1.1.xlsx**: Canonical ontology: 418 equipment lines, 16 branches (A to P), quantity drivers, package controls (sheet 39), evidence taxonomy (sheet 38), gap profiles (sheet 14), historical anchors (sheet 35). Frozen 2026-10-06.
- **EXCOOL cost plan, 27 May 2021 (Evaluation Consultants)**: Admitted historical. Q2 2021 London cost plan, 20 MW. Used for package shape, within-source scaling, supply versus installed split and the 52-line cost skeleton. Not a 2026 price book. No escalation applied. Open QC flag: support/admin line of £7.5m conflicts with the plan's exclusion note.
- **CIBSE Journal / AECOM data-centre cooling cost model, 2019**: Admitted historical. Installed cooling packages per kW IT for a 4.5 MW Tier III reference facility: conventional £1,450, IAC £1,260, hybrid £1,720. Not chiller-only prices. The hybrid total implies £240/kW of room cooling that the extracted lines do not itemise; this is flagged on slide 16 as an inference.
- **Executed public awards (Scottish Ambulance Service Cardonald generator; Southern Water UPS framework lot; Guildhall chiller replacement)**: CA1 package evidence. Installed or package scope only. No unit normalisation. Guildhall award and later change value are one project and count once.
- **Public catalogue and reseller prices (APC UPS and transformer SKUs via CDW; AutomationDirect PLC; breaker resellers; FS fibre panels)**: CA3 current component evidence. Native currency and list versus reseller prices kept separate. Wrong scale for MW-class plant.
- **Surplus Record generator listings**: CA4 marketplace asks. Calibration only.
- **Turner & Townsend, Rider Levett Bucknall, Arcadis**: Aggregate benchmark families. Reconciliation of totals only. Never component prices.
