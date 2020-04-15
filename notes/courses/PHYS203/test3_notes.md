# Test 3 study notes

Notes to study for the third test of this course

## Definitions

- **Latent heat**: Heat required to convert a solid into liquid or liquid into gas without a change in temperature.
- **Macrostate**:  A state of the system specified by macroscopic quantities
- **Microstate**: An exact microscopic description of the system, for example, a list of the positions and velocities of all particles in a gas.
- **Multiplicity**: $\Omega$ is the number of **microstates** per **macrostate**
  - $S = k \ln\Omega$
- **Fundamental Assumption of Statistical Mechanics**: In an isolated system with fixed internal energy $U$, fixed volume $V$, and fixed number of atoms $N$, then all microstates are equally likely.
  - This imples that an isolated system always evolve towards a **macrostate** with the largest **multiplicity**
- **Quasistatic**: Keeping the system in equilibrium with itself as the process happens
  - This is the same as keeping the system close to maximum entropy for a given macrostate at all times
  - Is generally *slow* and *careful*
- **Temperature**: Part of system that tells how much heat it is throwing off.
  - Is related to how much entropy it loses when it throws off heat
  - $T = \left(\frac{\partial S}{\partial U}|_{V,N}\right)^{-1} = \frac{\partial U}{\partial S}|_{V,N}$
- **Pressure**: Related to how much entropy system gains when volume is increased
  - $P = T\frac{\partial S}{\partial V}|_{U,N}$
- **Thermodynamic identity**: $dU = -PdV + TdS$
- **Hemlholtz free energy**: $F = U - TS$
  - Extensive state function
  - For **reversible** processes, $Q = T\Delta S$
    - **F** must stay the same if process is *reversible*
  - For **irreversible** processes, $Q < T\Delta S$ since new entropy is created spontaneously
    - **F** must decrease if the process is *irreversible*
    - Implies that increase in free energy **F** cannot be larger than work done on system
  - $\Delta F = \Delta U - T\Delta S$
  - $\Delta U = Q + W$
  - $\Delta F = Q + W - T\Delta S$
- **Enthalpy**: $H = U + PV$
  - $\Delta H = \Delta U + \Delta (PV)$
  - $\Delta H = Q - W + \Delta P V + P\Delta V$
  - $\Delta H = Q - P \Delta V + \Delta P V + P\Delta V$
  - $\Delta H = Q + \Delta P V$
- **Gibb's free energy**: $G = H - TS$
  - $G = U + PV - TS$
  - $G = F + PV$
  - Phase with lower **gibb's free energy** is more stable
- **Chemical Potential**: Chemical potential $\mu \equiv -T \frac{\partial S}{\partial N} |_{U,V}$
  - Particles flow from high potential to low potential
  - $\mu$ is an **intensive** quantity
  - Relevant when N is not constant
  - $G = N\mu$
- **Clausius-Clapeyron equation**: $\frac{dP}{dT} = \frac{L}{T\Delta V}$
  - Can predict change in melting pressure when applying extra pressure if we know volume and latent heat of melting.
    - When one of the substance is gas, a useful approximation is $\Delta V \approx V(gas) \approx \frac{RT}{P}$
      - Further, assuming that $L$ is a constant, we get that $\frac{dP}{dT} = \frac{LP}{RT^2}$
  - **Vapour equation**: $T - T_0 = \frac{RT_0^2}{P_0L}(P-P_0)$
    - Derivation: 
      - $P = \text{const. }e^{-L/RT} = P_0e^{L/RT_0 - L/RT}$
      - $P = P_0e^{L(T-T_0)/RT_0T} \approx P_0e^{L(T-T_0)/RT_0^2}\approx P_0+\frac{P_0L}{RT_0^2}(T-T_0)$
    - Partial pressures for each component are proportional to number of particles of that component
      - Ex: $\frac{P_{\text{partial}}(H_2O)}{P_{\text{total}}} =\frac{N(H_2O)}{N_{\text{total}}}$
      - At 39 degrees celcius and 0.07atm, at 100% humidity, air is about 7% vapor by volume

## Heat engines

- **Carnot cycle efficiency** $e \equiv \frac{\text{desirable output}}{\text{cost}} = \frac{W}{Q_h} = \frac{Q_h - Q_c}{Q_h}$ where $Q_h$ is $Q_{in}$ and $Q_c$is $Q_{out}$
  - Requires that the cycle must be **reversible** and involves no change in **entropy**
- efficiency has a bound: $e \leq 1- \frac{T_c^{\text{reservoir}}}{T_h^{\text{reservoir}}}$
- efficiency max: $e_{max} = e_{carnot} = 1 - \frac{T_c}{T_h}$
- **First law** (conservation of energy) states that $e\leq 1$ (cannot win)
- **Second law** states that $e \leq 1-\frac{T_c}{T_h}$ (cannot break even)

if the whole process is reversible, efficiency: $e = 1 - \frac{T_c^{\text{reservoir}}}{T_h^{\text{reservoir}}}$ exactly.


## Refrigerators

A refrigerator moves heat $Q_c$ from the cold reservoir and heat $Q_h$ to the hot reservoir. The entropy of the universe changes like $Q_h/T_h^{\text{reservoir}} - Q_c/T_c^{\text{reservoir}}$

Instead of efficiency, we use the coefficient of performance (COP)\
$\text{COP} \equiv \frac{\text{desirable output}}{\text{the cost}} = \frac{Q_c}{W}$

where $W + Q_{\text{in}} = Q_{\text{out}}$, $Q_{\text{in}} = Q_c$, $Q_{\text{out}} = Q_h$

$\text{COP}_{\text{max}} = \frac{T_c}{T_h - T_c}$ for refrigerators

## Throttling

A throttling process is a process where there is no enthalpy change between states, no work is done, and the process is adiabatic. It is fundamentally **irreversible**

Ex. 1kg of liquid water at its boiling point at 1atm is throttled so that its temperature is lowered to $20^o\text{C}$. What fraction of water is vaporized?

Ans: Knowing that enthalpy of water $H_{water} = 419$ at 100 degrees, then the enthalpy must be the same since it is a throttled process. Let $x$ be the unknown vaporized water. $H_{water} = (1-x)H_{water} + H_{steam}$

## Battery voltage

Given $\Delta G$ and $\Delta H$, one can easily calculate the battery voltage with:

$$Voltage = \frac{work}{charge} = \frac{-\Delta G}{\# electrons \times e \times N_A}$$

where $N_A$ is avagadro's number and e is the charge of an electron

### Reversible batteries

For reversible operation of batteries in the base case scenario, $Q = T\Delta S = \Delta H - \Delta G$ where a $+$ sign for $Q$ means heat flows into the battery.

## Relationships of formulas
$H = U + PV$\
$G = F + PV$\
$F = U - TS$\
$G = H - TS$

## Thermodynamic identities

|||
|---|---|---|---|---|
| $dG = -SdT + VdP + \mu dN$  | $G = G(T,P,N)$ |
| $dU = TdS - PdV + \mu dN$   | $U = U(S,V,N)$ |
| $dF = -SdT - PdV + \mu dN$  | $F = F(T,V,N)$ |
| $dH = TdS + VdP + \mu dN$   | $H = H(S,P,N)$ |


## Fundamental theorems
$$\Delta S_{\text{universe}} \ge 0$$

For ideal gas:

$$H = U + PV = \frac{f}{2}NkT + NkT = \frac{f+2}{2}NkT$$
