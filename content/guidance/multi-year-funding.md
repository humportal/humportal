---
title: Multi-Year Funding
summary: How IATI data can be used to track Grand Bargain multi-year funding commitments.
---

`DRAFT FOR CONSULTATION: 9 February 2023`

# IATI data for Multi-Year Funding

*Guidance note from the technical leads of the Grand Bargain Transparency Workstream*


<b-alert show>
<p><b>Summary</b></p>
<p>IATI data can be used to track Grand Bargain multi-year funding commitments, with some caveats. This technical note outlines a methodology which can be followed by both Grand Bargain signatories and those tasked with monitoring the implementation of these commitments.</p>
<ul>
  <li>Donors should publish commitments, disbursements, start and end dates, and activity budgets;</li>
  <li>Stakeholders in the quality funding community should agree a methodology for how to use this data to track progress against the quality funding commitments. A draft methodology is proposed below.</li>
</ul>
</b-alert>

<b-alert show variant="success">
<p><b><font-awesome-icon :icon="['fas', 'comments']" class="text-success"></font-awesome-icon> What do you think?</b></p>
This is an draft note for consultation. We welcome feedback and discussion on this note, which can be discussed in detail on <a href="https://iaticonnect.org/topic/new-guidance-notes-publishing-and-using-humanitarian-iati-data-monitor-grand-bargain">IATI Connect</a>.
</b-alert>

## Grand Bargain Multi-Year Funding Commitments

Aid organisations and donors committed to:

> Increase multi-year, collaborative and flexible planning and multi-year funding instruments and document the impacts on programme efficiency and effectiveness, ensuring that recipients apply the same funding arrangements with their implementing partners.
>
> Support in at least five countries by the end of 2017 multi-year collaborative planning and response plans through multi-year funding and monitor and evaluate the outcomes of these responses.

Multi-year funding is [defined](https://interagencystandingcommittee.org/system/files/2022-07/Grand%20Bargain%20Caucus%20on%20Quality%20Funding%20-%20Outcome%20Document%20-%20final%20-%2011Jul22.pdf) in the following way:

> ‘Multi-year funding should have the following characteristics to enable recipient organisations to respond efficiently and effectively, especially to protracted crises, including to shifting dynamics on the ground:
> 1. Duration: 24 months or more at the contract signature, in line with the OECDDAC definition
> 2. Timeliness: approved funding is advanced to implementing agencies at the beginning of the agreed period, rather than being paid after the period in question
> 3. Predictability: total funding approved for a multi-year programme should be paid up front wherever possible. Where this is not possible, pre-approved annual tranches should be disbursed, in line with existing guidelines, and as long as contractual obligations are met and funding is available
> 4. Flexible arrangements: funding should have some of these features –
>    * ability to adapt to changing circumstances and move funds between budget lines and/or sectors of activity, specific locations, delivery modalities, and years; to the extent possible, with no additional pre-approval processes;
>    * smooth and/or fast disbursement of funds;
>    * no-cost extensions available beyond the initial contract duration.

## Can IATI Data Help Track Commitments?

If published correctly, IATI data can be used for automatically tracking whether organisations are:

* providing funding for activities that are intended to have a duration of at least 24 months;
* providing funding at the beginning of the agreed period;
* providing all funding at the beginning of the agreed period.

It is not currently possible to automatically determine whether funding meets the commitments around “flexible arrangements”. It could be possible to publish this information as an extension to the IATI Standard, depending on agreement and commitment of signatories to publish such information.

<b-alert show variant="info">
NB: This draft note only focusing on tracking multi-year funding on <b>outgoing</b> funding. Tracking multi-year funding on <b>incoming</b> funding is more complex, especially when there are multiple funders, and requires some more thought and discusion.
</b-alert>

## What to Publish to Enable Automatic Tracking

Grand Bargain signatories should publish data in several standard fields, which can then be used to independently assess whether the activity should count as multi-year funding.

Grand Bargain signatories should publish:

* start and end dates;
* outgoing commitments;
* budgets for the lifetime of the activity;
* disbursements.

## Progress in Implementation

1,325 out of 1,521 IATI publishers currently publish the start date, and 1,106 publish the end date. 520 IATI publishers currently publish commitments, while 1,363 publish budgets, and 705 publish disbursements. Note that some publishers may not publish these elements for all of their activities.

## How to Track Commitments Using IATI Data

Organisations monitoring Grand Bargain multi-year funding commitments can use IATI data to identify the share of funding that counts as multi-year funding. This section outlines a general methodology which could be used to calculate the degree of multi-year funding of each publisher’s data.

### Calculating whether activities have a duration of at least 24 months

1. Download data from the [Country Development Finance Data tool](https://countrydata.iatistandard.org/), for each publisher, filtering to only include humanitarian data (where “Humanitarian” is “Humanitarian”, which appears as “1” in the export).
2. Calculate whether the difference between the activity start date and the activity end date is over 24 months (YES/NO).
3. Summarise the total value in USD by whether (or not) the activity lasts for at least 24 months.

### Calculating the amount of funding provided at the beginning of the period

Assuming “beginning” is within the first [two] quarters (though this could easily be adjusted in the methodology below):

1. Download data from the [Country Development Finance Data tool](https://countrydata.iatistandard.org/), for each publisher, filtering to only include humanitarian data (where “Humanitarian” is “Humanitarian”, which appears as “1” in the export).
2. For disbursements, calculate the number of quarters from the activity start date to the “Calendar Year and Quarter”. Add a new column stating whether this is less than [two] quarters (YES/NO).
3. Add a pivot table summarising the total commitments by activity, and the total disbursements where the new column added in step 2 is YES. Calculate whether:
   1. the disbursement amount is over 0% of the commitment amount (“funding provided at the beginning of the period”) (YES/NO)
   2. the disbursement amount is 100% of the commitment amount (“total funding approved for a multi-year programme should be paid up front…”) (YES/NO)
4. Summarise the total value in USD by:
   1. total commitments provided
   2. total commitments where over 0% of the commitment value is provided as disbursements within the first [two] quarters (step 3.a. above)
   3. total commitments where 100% of the commitment value is provided as disbursements within the first [two] quarters (step 3.b above)
