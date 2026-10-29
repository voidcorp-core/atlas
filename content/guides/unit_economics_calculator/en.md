---
title: Understanding and Calculating Unit Economics
description: Calculate what each customer contributes, distinguish revenue from margin, and identify missing inputs before deciding.
---

# Understanding and Calculating Unit Economics

Growing revenue does not tell you what remains after acquiring and serving customers. Unit economics help answer that question when the costs, period and assumptions are explicit. They do not replace cash-flow monitoring.

## 1. Define the scope before calculating

Choose a period and a group of comparable customers. Separate acquisition spending, service costs and other expenses. An average cost per customer is not necessarily variable: a hosting subscription may stay fixed until the next capacity tier.

Classify each cost once within the calculation concerned. Mark missing spending as unknown, never zero. Keep observed inputs separate from hypothetical scenarios.

## 2. Calculate full CAC

**CAC = sales and marketing spending / new customers acquired.** Include advertising, salaries or acquisition time, contractors and relevant tools. Check that the period reflects your sales cycle.

Dividing advertising spend alone by all new customers gives neither full CAC nor advertising-channel CAC. If no customers were acquired, CAC for that period is not calculable.

## 3. Calculate gross-margin LTV

Here, LTV means expected margin over the customer relationship, not accumulated revenue.

**Monthly gross profit per customer = monthly revenue per customer - monthly service costs per customer.**

For comparable customers with positive, constant monthly customer churn and stable margin, excluding expansion:

**Gross-margin LTV ≈ monthly gross profit per customer / monthly customer churn.**

Fictional example: EUR 100 monthly revenue, EUR 40 service costs and 5% churn give EUR 60 margin, then estimated LTV of 60 / 0.05 = EUR 1,200. This does not establish that customers will actually stay twenty months. With little history or zero churn, do not report infinite LTV: examine cumulative margins for observed cohorts.

## 4. Calculate payback

**Gross-margin payback = CAC / monthly gross profit per customer.** In the fictional example, full CAC of EUR 300 gives 300 / 60 = 5 months. LTV/CAC is 1,200 / 300 = 4.

These results depend on the assumptions above. They neither prove overall profitability nor justify increasing acquisition spending on their own. Compare payback with available cash and observed retention. Zero or negative margin gives no finite payback under this calculation.

## 5. Keep break-even separate

**Customers needed = monthly fixed costs / (monthly revenue per customer - monthly variable cost per customer)**, rounded up.

Fixed costs must not already have been deducted in the denominator. Separate fixed from variable costs rather than automatically reusing the gross profit calculated above. Zero or negative contribution gives no finite break-even under this formula. If costs are missing, leave the result not calculable.

## The next useful check

Repeat the calculations with less favorable churn or acquisition cost, without presenting the scenario as a forecast. For example, reducing churn from 4% to 2.5% multiplies LTV by 1.6 at unchanged margin, not by two. Then identify the missing input most likely to change your decision.

For more on revenue versus margin in CAC recovery: [SaaS Metrics Framework, Updata Partners](https://updata.com/white-paper/saas-metrics-framework/). Its proposed thresholds are not universal verdicts.

[Calculate with the Unit Economics Calculator prompt](/en/prompts/unit_economics_calculator)
