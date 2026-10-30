// Miledeep Enterprise ERP — Inventory & Stores Module Views
// General Store (Indent Page, Indent List, Proforma Order, Proforma List, GRN, GRN List, Material Issue)
// Packing Material (PM Proforma Invoice)
// Inventory (Proforma Register)

import { DataTable } from '../components/table.js';
import { Modal } from '../components/modal.js';
import { Toast } from '../components/toast.js';
import { TabBar } from '../components/tabBar.js';

export const InventoryView = {
  // Local state for interactive operations
  state: {
    // 1. General Store Indent Page Records
    indentPageRecords: [
      {
        id: 1,
        docNo: 'IND-GS-2026-0041',
        date: '2026-10-28',
        department: 'Processing Unit-5',
        status: 'Approved',
        narration: 'Monthly store requisition for seafood processing line consumables and safety PPE.',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            requestedQty: 150,
            purpose: 'Line peeling and grading hygiene requirement',
            attachment: 'gloves_spec_sheet.pdf',
            remarks: 'High priority daily requirement'
          },
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            requestedQty: 20,
            purpose: 'Freezer lot pallet tagging',
            attachment: '',
            remarks: 'For Zebra industrial printer'
          }
        ]
      },
      {
        id: 2,
        docNo: 'IND-GS-2026-0042',
        date: '2026-10-27',
        department: 'Coldstore Hub',
        status: 'In Procurement',
        narration: 'Coldstore equipment maintenance and sub-zero protective gear requisition.',
        items: [
          {
            item: 'Sub-Zero Thermal Parka Jackets & Boots',
            uom: 'Pairs',
            availableQty: 5,
            requestedQty: 30,
            purpose: 'Night-shift coldstore warehouse crew',
            attachment: 'parka_safety_cert.pdf',
            remarks: 'Sizes 9, 10, 11'
          }
        ]
      },
      {
        id: 3,
        docNo: 'IND-GS-2026-0043',
        date: '2026-10-26',
        department: 'Quality Control Lab',
        status: 'Approved',
        narration: 'Chemical reagents and HACCP water residual chlorine screen testing kits.',
        items: [
          {
            item: 'Chlorine Residual & Ozone Test Kits',
            uom: 'Kits',
            availableQty: 2,
            requestedQty: 25,
            purpose: 'Daily HACCP water screening',
            attachment: 'lab_haccp_protocol.pdf',
            remarks: 'Urgent stock needed for audit'
          }
        ]
      },
      {
        id: 4,
        docNo: 'IND-GS-2026-0044',
        date: '2026-10-25',
        department: 'Engineering & Maintenance',
        status: 'Pending',
        narration: 'Contact Plate Freezer door replacement seals and overhaul gaskets.',
        items: [
          {
            item: 'Neoprene Plate Freezer Door Gaskets (8m)',
            uom: 'Sets',
            availableQty: 1,
            requestedQty: 12,
            purpose: 'Prevent thermal leakage on Plate Freezer #3',
            attachment: '',
            remarks: 'Scheduled weekend overhaul'
          }
        ]
      },
      {
        id: 5,
        docNo: 'IND-GS-2026-0045',
        date: '2026-10-24',
        department: 'Pre-Processing Unit',
        status: 'Approved',
        narration: 'Perforated shrimp washing and sorting crates replacement.',
        items: [
          {
            item: 'Stainless Steel SS316 Shovels & Baskets',
            uom: 'Nos',
            availableQty: 10,
            requestedQty: 50,
            purpose: 'Deheading shed intake sorting',
            attachment: '',
            remarks: 'Heavy duty SS316 grade'
          }
        ]
      },
      {
        id: 6,
        docNo: 'IND-GS-2026-0046',
        date: '2026-10-20',
        department: 'Administration & Safety',
        status: 'Pending',
        narration: 'Fire extinguishers refill and safety signage replacement.',
        items: [
          {
            item: 'CO2 Fire Extinguisher Refill (4.5kg)',
            uom: 'Nos',
            availableQty: 2,
            requestedQty: 10,
            purpose: 'Annual plant safety audit compliance',
            attachment: '',
            remarks: 'Scheduled inspection'
          }
        ]
      },
      {
        id: 7,
        docNo: 'IND-GS-2026-0047',
        date: '2026-10-18',
        department: 'Processing Unit-5',
        status: 'Rejected',
        narration: 'Additional sorting crates beyond monthly allocation quota.',
        items: [
          {
            item: 'Plastic Sorting Crates (Red, 50L)',
            uom: 'Nos',
            availableQty: 40,
            requestedQty: 120,
            purpose: 'Extra buffer storage',
            attachment: '',
            remarks: 'Quota exceeded for October'
          }
        ]
      },
      {
        id: 8,
        docNo: 'IND-GS-2026-0048',
        date: '2026-10-15',
        department: 'Coldstore Hub',
        status: 'Approved',
        narration: 'Heavy duty pallet shrink wrap film rolls for blast freezer staging.',
        items: [
          {
            item: 'Stretch Wrap Film Rolls (500mm x 300m, 23mic)',
            uom: 'Rolls',
            availableQty: 6,
            requestedQty: 50,
            purpose: 'Export pallet wrapping',
            attachment: '',
            remarks: 'Approved by store manager'
          }
        ]
      },
      {
        id: 9,
        docNo: 'IND-GS-2026-0049',
        date: '2026-10-12',
        department: 'Quality Control Lab',
        status: 'In Procurement',
        narration: 'Microbiology culture media and sterile petri dishes refill.',
        items: [
          {
            item: 'Plate Count Agar (PCA) Powder 500g',
            uom: 'Bottles',
            availableQty: 1,
            requestedQty: 8,
            purpose: 'Daily pathogen screening',
            attachment: '',
            remarks: 'Standard lab consumable'
          }
        ]
      },
      {
        id: 10,
        docNo: 'IND-GS-2026-0050',
        date: '2026-10-05',
        department: 'Engineering & Maintenance',
        status: 'Approved',
        narration: 'Ammonia refrigeration valve seals and pressure gauge replacement.',
        items: [
          {
            item: 'Danfoss Ammonia Valve Packing Kits',
            uom: 'Sets',
            availableQty: 0,
            requestedQty: 6,
            purpose: 'Refrigeration unit routine maintenance',
            attachment: 'valve_specs.pdf',
            remarks: 'Critical spare'
          }
        ]
      }
    ],

    // 1b. General Store Proforma Orders
    proformaOrderList: [
      {
        id: 1,
        docNo: 'PO-GS-2026-0101',
        code: 'COD-GS-8812',
        date: '2026-10-28',
        supplier: 'Devi Safety Aids & Industrial Supplies',
        paymentTerms: '30 Days from Inward',
        freightType: 'Paid by Supplier',
        subDeliveryDate: '2026-11-04',
        narration: 'Procurement of nitrile gloves and hygiene protective gear for Unit-5 processing shifts',
        status: 'Approved',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            unit: 'Box',
            availQty: 15,
            unitPrice: 280.00,
            quantity: 150,
            supplierRate: 280.00,
            totalValue: 42000.00,
            discountPercent: 5,
            discountAmt: 2100.00,
            gstPercent: 18,
            sgstAmt: 3591.00,
            cgstAmt: 3591.00,
            igstAmt: 0.00,
            taxAmount: 7182.00,
            invoiceAmt: 47082.00,
            dispatchedDate: '2026-10-29'
          }
        ]
      },
      {
        id: 2,
        docNo: 'PO-GS-2026-0102',
        code: 'COD-GS-8813',
        date: '2026-10-27',
        supplier: 'Apex Engineering & Spare Parts Ltd',
        paymentTerms: '50% Advance / 50% Delivery',
        freightType: 'To Pay (Consignee)',
        subDeliveryDate: '2026-11-06',
        narration: 'Plate freezer overhaul replacement gaskets and neoprene refrigeration seals',
        status: 'Issued to Vendor',
        items: [
          {
            item: 'Neoprene Plate Freezer Door Gaskets (8m)',
            unit: 'Sets',
            availQty: 1,
            unitPrice: 3200.00,
            quantity: 12,
            supplierRate: 3200.00,
            totalValue: 38400.00,
            discountPercent: 0,
            discountAmt: 0.00,
            gstPercent: 18,
            sgstAmt: 3456.00,
            cgstAmt: 3456.00,
            igstAmt: 0.00,
            taxAmount: 6912.00,
            invoiceAmt: 45312.00,
            dispatchedDate: '2026-10-30'
          }
        ]
      },
      {
        id: 3,
        docNo: 'PO-GS-2026-0103',
        code: 'COD-GS-8814',
        date: '2026-10-26',
        supplier: 'Bio-Chem Scientific Instruments India',
        paymentTerms: 'Immediate against Inward',
        freightType: 'CIF Visakhapatnam',
        subDeliveryDate: '2026-11-02',
        narration: 'HACCP water chlorine residual screening test kits and laboratory consumables',
        status: 'Pending Delivery',
        items: [
          {
            item: 'Chlorine Residual & Ozone Test Kits',
            unit: 'Kits',
            availQty: 2,
            unitPrice: 1450.00,
            quantity: 25,
            supplierRate: 1450.00,
            totalValue: 36250.00,
            discountPercent: 2,
            discountAmt: 725.00,
            gstPercent: 12,
            sgstAmt: 0.00,
            cgstAmt: 0.00,
            igstAmt: 4263.00,
            taxAmount: 4263.00,
            invoiceAmt: 39788.00,
            dispatchedDate: '2026-10-28'
          }
        ]
      },
      {
        id: 4,
        docNo: 'PO-GS-2026-0104',
        code: 'COD-GS-8815',
        date: '2026-10-24',
        supplier: 'Sri Venkateswara Packaging Ltd',
        paymentTerms: '30 Days from Inward',
        freightType: 'Paid by Supplier',
        subDeliveryDate: '2026-10-31',
        narration: 'Thermal barcode printer ribbons for coldstore pallet tracking and tagging',
        status: 'Completed',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            unit: 'Rolls',
            availQty: 4,
            unitPrice: 420.00,
            quantity: 40,
            supplierRate: 420.00,
            totalValue: 16800.00,
            discountPercent: 0,
            discountAmt: 0.00,
            gstPercent: 18,
            sgstAmt: 1512.00,
            cgstAmt: 1512.00,
            igstAmt: 0.00,
            taxAmount: 3024.00,
            invoiceAmt: 19824.00,
            dispatchedDate: '2026-10-26'
          }
        ]
      },
      {
        id: 5,
        docNo: 'PO-GS-2026-0105',
        code: 'COD-GS-8816',
        date: '2026-10-22',
        supplier: 'Delta Seals & Tapes Corp',
        paymentTerms: 'Net 15 Days',
        freightType: 'FOB Ex-Factory',
        subDeliveryDate: '2026-11-01',
        narration: 'High-tensile PP strapping rolls and carton sealing tape for packaging department',
        status: 'Approved',
        items: [
          {
            item: 'Heat-Sealing PP Strapping Rolls (12mm x 3000m)',
            unit: 'Rolls',
            availQty: 8,
            unitPrice: 1650.00,
            quantity: 30,
            supplierRate: 1650.00,
            totalValue: 49500.00,
            discountPercent: 4,
            discountAmt: 1980.00,
            gstPercent: 18,
            sgstAmt: 4276.80,
            cgstAmt: 4276.80,
            igstAmt: 0.00,
            taxAmount: 8553.60,
            invoiceAmt: 56073.60,
            dispatchedDate: '2026-10-25'
          }
        ]
      }
    ],

    // 1c. General Store Goods Receipt Notes (GRN)
    grnList: [
      {
        id: 1,
        docNo: 'GRN-GS-2026-0041',
        code: 'COD-GRN-7721',
        date: '2026-10-28',
        supplier: 'Devi Safety Aids & Industrial Supplies',
        invoiceNumber: 'INV-DSA-2026-881',
        invoiceDate: '2026-10-27',
        poNo: 'PO-GS-2026-0101',
        freightType: 'Paid by Supplier',
        narration: 'Inward verification of Nitrile food-grade gloves for processing lines',
        status: 'Inward Received',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            poQty: 150,
            receivedQty: 150,
            deviationQty: 0,
            location: 'Main Store Rack A-2',
            batch: 'BAT-DSA-992',
            itemPrice: 280.00,
            baseValue: 42000.00,
            deviationAmount: 0.00,
            gstPercent: 18,
            gstTaxAmount: 7560.00
          }
        ]
      },
      {
        id: 2,
        docNo: 'GRN-GS-2026-0042',
        code: 'COD-GRN-7722',
        date: '2026-10-27',
        supplier: 'Apex Engineering & Spare Parts Ltd',
        invoiceNumber: 'INV-APX-4412',
        invoiceDate: '2026-10-26',
        poNo: 'PO-GS-2026-0102',
        freightType: 'To Pay (Consignee)',
        narration: 'Plate freezer silicone gaskets received at Engineering maintenance bay',
        status: 'QC Verified',
        items: [
          {
            item: 'Plate Freezer Silicone Gaskets (Model PF-40)',
            uom: 'Sets',
            availableQty: 2,
            poQty: 12,
            receivedQty: 10,
            deviationQty: -2,
            location: 'Engineering Bay C',
            batch: 'BAT-ENG-441',
            itemPrice: 3200.00,
            baseValue: 32000.00,
            deviationAmount: -6400.00,
            gstPercent: 18,
            gstTaxAmount: 5760.00
          }
        ]
      },
      {
        id: 3,
        docNo: 'GRN-GS-2026-0043',
        code: 'COD-GRN-7723',
        date: '2026-10-26',
        supplier: 'Sri Venkateswara Packaging Ltd',
        invoiceNumber: 'INV-SVP-1029',
        invoiceDate: '2026-10-25',
        poNo: 'PO-GS-2026-0104',
        freightType: 'Paid by Supplier',
        narration: 'Thermal barcode ribbons for coldstore warehouse batch printing',
        status: 'Stored',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            poQty: 40,
            receivedQty: 40,
            deviationQty: 0,
            location: 'Coldstore Hub B',
            batch: 'BAT-RIB-802',
            itemPrice: 420.00,
            baseValue: 16800.00,
            deviationAmount: 0.00,
            gstPercent: 18,
            gstTaxAmount: 3024.00
          }
        ]
      },
      {
        id: 4,
        docNo: 'GRN-GS-2026-0044',
        code: 'COD-GRN-7724',
        date: '2026-10-25',
        supplier: 'Bio-Chem Scientific Instruments India',
        invoiceNumber: 'INV-BCS-0941',
        invoiceDate: '2026-10-24',
        poNo: 'PO-GS-2026-0103',
        freightType: 'Paid by Supplier',
        narration: 'QC lab chlorine test strips and analytical buffer kits',
        status: 'Inward Received',
        items: [
          {
            item: 'Chlorine Residual Test Strips (0-500 PPM)',
            uom: 'Kits',
            availableQty: 10,
            poQty: 25,
            receivedQty: 25,
            deviationQty: 0,
            location: 'QC Lab Storage',
            batch: 'BAT-QC-112',
            itemPrice: 750.00,
            baseValue: 18750.00,
            deviationAmount: 0.00,
            gstPercent: 12,
            gstTaxAmount: 2250.00
          }
        ]
      }
    ],

    // 1d. General Store Material Issues
    materialIssueList: [
      {
        id: 1,
        docNo: 'ISS-GS-2026-0031',
        date: '2026-10-28',
        location: 'Main Store Rack A-2',
        department: 'Processing Unit-5',
        narration: 'Store issue for Shift A processing line consumables and daily PPE',
        items: [
          {
            item: 'Nitrile Food-Grade Gloves (Blue, L)',
            uom: 'Box',
            availableQty: 15,
            itemPrice: 280.00,
            batch: 'BAT-2026-09A',
            quantity: 50,
            baseValue: 14000.00,
            gstPercent: 18,
            invoiceAmount: 16520.00,
            purpose: 'Shrimp peeling table crew hygiene',
            attachment: '',
            remarks: 'Shift Incharge indent'
          }
        ]
      },
      {
        id: 2,
        docNo: 'ISS-GS-2026-0032',
        date: '2026-10-27',
        location: 'Coldstore Hub B',
        department: 'Coldstore Hub',
        narration: 'Thermal printer barcode ribbons issued for plate freezer lot tagging',
        items: [
          {
            item: 'Thermal Transfer Barcode Ribbon (110mm x 300m)',
            uom: 'Rolls',
            availableQty: 4,
            itemPrice: 420.00,
            batch: 'BAT-RIB-802',
            quantity: 10,
            baseValue: 4200.00,
            gstPercent: 18,
            invoiceAmount: 4956.00,
            purpose: 'Freezer export pallet labeling',
            attachment: '',
            remarks: 'Approved by CS Manager'
          }
        ]
      },
      {
        id: 3,
        docNo: 'ISS-GS-2026-0033',
        date: '2026-10-26',
        location: 'Engineering Bay C',
        department: 'Engineering & Maintenance',
        narration: 'Replacement valve packing kits for ammonia refrigeration maintenance',
        items: [
          {
            item: 'Danfoss Ammonia Valve Packing Kits',
            uom: 'Sets',
            availableQty: 2,
            itemPrice: 1850.00,
            batch: 'BAT-ENG-441',
            quantity: 2,
            baseValue: 3700.00,
            gstPercent: 18,
            invoiceAmount: 4366.00,
            purpose: 'Refrigeration unit overhaul',
            attachment: '',
            remarks: 'Routine preventive schedule'
          }
        ]
      }
    ],

    // 2. Packing Material Proforma Invoices
    pmProformaList: [
      {
        id: 1,
        docNo: 'PI-PM-2026-0041',
        date: '2026-10-28',
        currency: 'USD ($)',
        exchangeRate: '86.50',
        consignee: 'AquaStar Global Foods LLC, Seattle WA',
        company: 'Devi Fisheries Limited - Plant 5',
        portOfLoading: 'Visakhapatnam Port (INVTZ1)',
        notifyParty: 'Apex Global Logistics Newark, NJ',
        narration: 'Export packing proforma allocation for seasonal Vannamei pack',
        termOfDeliveryAndPayment: 'CIF Los Angeles / 30% Advance, 70% against BL copy',
        buyerOrderNo: 'BO-USA-2026-9921',
        exportReferenceNo: 'EXP-REF-8841',
        shipmentDate: '2026-11-20',
        countryOfFinalDestination: 'United States',
        countryOfOrigin: 'India',
        finalDestination: 'Los Angeles, CA',
        proNo: 'PRO-2026-0819',
        poAttachment: 'po_contract_9921.pdf',
        poApprovedDate: '2026-10-25',
        processAndPackedBy: 'Devi Fisheries Ltd (Unit-5, JPT)',
        portOfDischarge: 'Port of Los Angeles (USLAX)',
        isGlaze: 'Yes (10% Protective Water Glaze)',
        deliveryTerms: 'CIF',
        buyerOtherThanConsignee: 'Ocean Harvest International USA',
        amountInWords: 'US Dollars Sixty-Four Thousand Eight Hundred Only',
        advanceAmount: '19440.00',
        items: [
          {
            variety: 'Vannamei White Shrimp',
            grade: '31/40',
            packingStyle: '10 X 1 KG Printed Pouch',
            processType: 'PDTO (Peeled Deveined Tail-On)',
            brand: 'Devi Gold',
            bapMaster: '4-Star BAP Certified',
            noOfCartons: 1500,
            totalNetWeight: 15000
          },
          {
            variety: 'Black Tiger Shrimp',
            grade: '16/20',
            packingStyle: '6 X 2 KG Master Carton',
            processType: 'HLSO (Headless Shell-On)',
            brand: 'Ocean Crown',
            bapMaster: '4-Star BAP Certified',
            noOfCartons: 800,
            totalNetWeight: 9600
          }
        ]
      },
      {
        id: 2,
        docNo: 'PI-PM-2026-0042',
        date: '2026-10-27',
        currency: 'EUR (€)',
        exchangeRate: '93.20',
        consignee: 'Marunaka Seafoods Europe BV, Rotterdam',
        company: 'Devi Fisheries Limited - Plant 5',
        portOfLoading: 'Chennai Port (INMAA1)',
        notifyParty: 'Kuehne+Nagel Logistics Rotterdam',
        narration: 'Polybag printed shrimp packs for Netherlands retail line',
        termOfDeliveryAndPayment: 'CFR Rotterdam / 20% Advance, 80% DP at Sight',
        buyerOrderNo: 'BO-EUR-2026-1104',
        exportReferenceNo: 'EXP-REF-8842',
        shipmentDate: '2026-11-25',
        countryOfFinalDestination: 'Netherlands',
        countryOfOrigin: 'India',
        finalDestination: 'Rotterdam Port',
        proNo: 'PRO-2026-0820',
        poAttachment: 'po_contract_1104.pdf',
        poApprovedDate: '2026-10-24',
        processAndPackedBy: 'Devi Fisheries Ltd (Unit-5, JPT)',
        portOfDischarge: 'Port of Rotterdam (NLRTM)',
        isGlaze: 'No Glaze (Raw IQF Block)',
        deliveryTerms: 'CFR',
        buyerOtherThanConsignee: 'Direct Source Seafood EU',
        amountInWords: 'Euros Forty-Eight Thousand Five Hundred Only',
        advanceAmount: '9700.00',
        items: [
          {
            variety: 'Vannamei White Shrimp',
            grade: '41/50',
            packingStyle: '5 X 2 Lb Retail Zipper Bag',
            processType: 'PD (Peeled & Deveined)',
            brand: 'Devi Star',
            bapMaster: 'ASC Certified',
            noOfCartons: 1200,
            totalNetWeight: 10886
          }
        ]
      },
      {
        id: 3,
        docNo: 'PI-PM-2026-0043',
        date: '2026-10-26',
        currency: 'USD ($)',
        exchangeRate: '86.50',
        consignee: 'Nichirei Fresh Inc, Tokyo Japan',
        company: 'Devi Fisheries Limited - Plant 5',
        portOfLoading: 'Visakhapatnam Port (INVTZ1)',
        notifyParty: 'Mitsui-Soko Co Ltd Tokyo',
        narration: 'Duplex inner cartons for Japanese headless Vannamei blocks',
        termOfDeliveryAndPayment: 'FOB Visakhapatnam / 100% LC at Sight',
        buyerOrderNo: 'BO-JPN-2026-4402',
        exportReferenceNo: 'EXP-REF-8843',
        shipmentDate: '2026-11-18',
        countryOfFinalDestination: 'Japan',
        countryOfOrigin: 'India',
        finalDestination: 'Tokyo Port',
        proNo: 'PRO-2026-0821',
        poAttachment: 'po_nichirei_4402.pdf',
        poApprovedDate: '2026-10-23',
        processAndPackedBy: 'Devi Fisheries Ltd (Unit-7, GNT)',
        portOfDischarge: 'Yokohama Port (JPYOK)',
        isGlaze: 'Yes (10% Protective Water Glaze)',
        deliveryTerms: 'FOB',
        buyerOtherThanConsignee: 'Nichirei Corporation Global',
        amountInWords: 'US Dollars Fifty-Two Thousand Two Hundred Only',
        advanceAmount: '0.00',
        items: [
          {
            variety: 'Vannamei White Shrimp',
            grade: '26/30',
            packingStyle: '6 X 2 KG Master Carton',
            processType: 'HLSO (Headless Shell-On)',
            brand: 'Devi Gold',
            bapMaster: '4-Star BAP Certified',
            noOfCartons: 1000,
            totalNetWeight: 12000
          }
        ]
      }
    ],

    // 2b. Packing Material Purchase Orders
    pmPurchaseOrderList: [
      {
        id: 1,
        docNo: 'PO-PM-2026-0201',
        date: '2026-10-28',
        supplier: 'Sri Venkateswara Packaging Ltd',
        vendorAccount: 'Sri Venkateswara Packaging Ltd',
        paymentTerms: '30 Days Net from Inward Acceptance',
        freightType: 'Door Delivery (Freight Included)',
        freightCharges: 0.00,
        subject: 'Master Cartons for US Export Pack',
        narration: 'Urgent procurement of export master cartons for EU batch packaging',
        status: 'Approved',
        items: [
          {
            proNumber: 'PRO-2026-0819',
            approvedDate: '2026-10-25',
            variety: 'Vannamei White Shrimp',
            grade: '31/40',
            packingStyle: '10 X 1 KG Printed Pouch',
            processType: 'PDTO (Peeled Deveined Tail-On)',
            brand: 'Devi Gold',
            sizeInMm: '650 x 350 x 280 mm',
            availQty: 2500,
            proQty: 20000,
            weightKg: 2000.00,
            rate: 58.50,
            gross: 1170000.00,
            gstPercent: 12,
            sgst: 70200.00,
            cgst: 70200.00,
            taxAmount: 140400.00,
            invoiceAmt: 1310400.00,
            dispatchedDate: '2026-11-05',
            plantCode: 'PLANT-05 (JPT Unit)'
          }
        ]
      },
      {
        id: 2,
        docNo: 'PO-PM-2026-0202',
        date: '2026-10-27',
        supplier: 'Apex Polymers & Films India Ltd',
        vendorAccount: 'Apex Polymers & Films India Ltd',
        paymentTerms: '50% Advance / 50% Inward',
        freightType: 'Ex-Works with Paid Transit',
        freightCharges: 1500.00,
        subject: 'Printed LDPE Gusseted Pouches',
        narration: 'Pre-season supply of 2-Lb printed seafood pouches for US retail order',
        status: 'Issued to Vendor',
        items: [
          {
            proNumber: 'PRO-2026-0815',
            approvedDate: '2026-10-24',
            variety: 'Black Tiger Shrimp',
            grade: '16/20',
            packingStyle: '5 X 2 Lb Retail Zipper Bag',
            processType: 'HLSO (Headless Shell-On)',
            brand: 'AquaStar',
            sizeInMm: '50 Micron Polyfilm',
            availQty: 10000,
            proQty: 50000,
            weightKg: 4500.00,
            rate: 3.40,
            gross: 170000.00,
            gstPercent: 18,
            sgst: 15300.00,
            cgst: 15300.00,
            taxAmount: 30600.00,
            invoiceAmt: 200600.00,
            dispatchedDate: '2026-11-03',
            plantCode: 'PLANT-01 (Main Processing)'
          }
        ]
      },
      {
        id: 3,
        docNo: 'PO-PM-2026-0203',
        date: '2026-10-26',
        supplier: 'Modern Corrugators Visakhapatnam',
        vendorAccount: 'Modern Corrugators Visakhapatnam',
        paymentTerms: 'Immediate upon QC Approval',
        freightType: 'Door Delivery (Freight Included)',
        freightCharges: 0.00,
        subject: 'Duplex Inner Cartons for Japan Order',
        narration: 'Duplex inner cartons for Japanese market headless tail-on Vannamei blocks',
        status: 'In Production',
        items: [
          {
            proNumber: 'PRO-2026-0810',
            approvedDate: '2026-10-22',
            variety: 'Vannamei White Shrimp',
            grade: '26/30',
            packingStyle: '6 X 2 KG Master Carton',
            processType: 'PD (Peeled & Deveined)',
            brand: 'Devi Choice',
            sizeInMm: '380 x 220 x 140 mm',
            availQty: 8000,
            proQty: 30000,
            weightKg: 3000.00,
            rate: 9.80,
            gross: 294000.00,
            gstPercent: 12,
            sgst: 17640.00,
            cgst: 17640.00,
            taxAmount: 35280.00,
            invoiceAmt: 329280.00,
            dispatchedDate: '2026-11-02',
            plantCode: 'PLANT-05 (JPT Unit)'
          }
        ]
      }
    ],

    // 2c. Packing Material Goods Receipt Notes
    pmGrnList: [
      {
        id: 1,
        docNo: 'GRN-PM-2026-0051',
        date: '2026-10-28',
        vendor: 'Sri Venkateswara Packaging Ltd',
        vendorAccount: 'Sri Venkateswara Packaging Ltd',
        supplier: 'Sri Venkateswara Packaging Ltd',
        freightType: 'Door Delivery (Freight Included)',
        isGst: 'Yes (Registered GST Invoice)',
        invoiceNumber: 'INV-SVP-8821',
        invoiceDate: '2026-10-27',
        invoiceAttachment: '',
        creditNoteType: 'None',
        status: 'Verified & Binned',
        narration: 'First shipment of 10-KG Export Master Cartons received in good order',
        items: [
          {
            proNumber: 'PRO-2026-0819',
            typeOfOrder: 'Export Packaging Order',
            variety: 'Vannamei White Shrimp',
            grade: '31/40',
            packingStyle: '10 X 1 KG Printed Pouch',
            processType: 'PDTO (Peeled Deveined Tail-On)',
            brand: 'Devi Gold',
            sizeInMm: '650 x 350 x 280 mm',
            availQty: 2500,
            ppoQty: 20000,
            receivedQty: 20000,
            deviationQty: 0,
            location: 'Packaging Store Vault #1',
            batch: 'BAT-PM-2026-01',
            itemPrice: 58.50,
            baseValue: 1170000.00,
            deviationAmount: 0.00,
            gstPercent: 12,
            taxAmount: 140400.00,
            invoiceAmount: 1310400.00,
            purpose: 'Commercial export packing order allocation',
            attachment: '',
            remarks: 'Physical count verified; QC seal intact'
          }
        ]
      },
      {
        id: 2,
        docNo: 'GRN-PM-2026-0052',
        date: '2026-10-27',
        vendor: 'Apex Polymers & Films India Ltd',
        vendorAccount: 'Apex Polymers & Films India Ltd',
        supplier: 'Apex Polymers & Films India Ltd',
        freightType: 'Ex-Works with Paid Transit',
        isGst: 'Yes (Registered GST Invoice)',
        invoiceNumber: 'INV-APF-4419',
        invoiceDate: '2026-10-26',
        invoiceAttachment: '',
        creditNoteType: 'Shortage Deduction',
        status: 'Verified & Binned',
        narration: 'Printed polybags batch receipt - Quality check passed for seal integrity',
        items: [
          {
            proNumber: 'PRO-2026-0815',
            typeOfOrder: 'Standard Production Order',
            variety: 'Black Tiger Shrimp',
            grade: '16/20',
            packingStyle: '5 X 2 Lb Retail Zipper Bag',
            processType: 'HLSO (Headless Shell-On)',
            brand: 'AquaStar',
            sizeInMm: '50 Micron Polyfilm',
            availQty: 10000,
            ppoQty: 100000,
            receivedQty: 99500,
            deviationQty: -500,
            location: 'Central PM Bay A-2',
            batch: 'BAT-PM-2026-02',
            itemPrice: 3.40,
            baseValue: 338300.00,
            deviationAmount: -1700.00,
            gstPercent: 18,
            taxAmount: 60894.00,
            invoiceAmount: 399194.00,
            purpose: 'Export packing buffer stock',
            attachment: '',
            remarks: 'Minus 500 pcs shortage recorded on credit note'
          }
        ]
      }
    ],

    // 2d. Packing Material Material Issues
    pmMaterialIssueList: [
      {
        id: 1,
        docNo: 'ISS-PM-2026-0031',
        date: '2026-10-28',
        location: 'Packaging Store Vault #1',
        department: 'Packaging & Boxing Bay',
        narration: 'Material issue of master cartons for shift packing target',
        items: [
          {
            item: '7-Ply Corrugated Master Cartons (1 X 10 KGS IQF Print)',
            uom: 'MCs',
            availableQty: 25000,
            batch: 'BAT-PM-2026-01',
            quantity: 3500,
            itemPrice: 58.50,
            baseValue: 204750.00,
            gstPercent: 12,
            invoiceAmount: 229320.00,
            purpose: 'Export packing of 31/40 peeled deveined shrimp',
            attachment: '',
            remarks: 'Shift supervisor indent approved'
          }
        ]
      },
      {
        id: 2,
        docNo: 'ISS-PM-2026-0032',
        date: '2026-10-27',
        location: 'Central PM Bay A-2',
        department: 'IQF Line 1 Packing Table',
        narration: 'Polybag issuance for 2-Lb retail brand run',
        items: [
          {
            item: 'Printed LDPE 2-Lb Gusseted Shrimp Bags with Zipper (50 Micron)',
            uom: 'Bags',
            availableQty: 99500,
            batch: 'BAT-PM-2026-02',
            quantity: 12000,
            itemPrice: 3.40,
            baseValue: 40800.00,
            gstPercent: 18,
            invoiceAmount: 48144.00,
            purpose: 'Retail branded zipper packaging for US consignment',
            attachment: '',
            remarks: 'Daily production run dispatch'
          }
        ]
      }
    ],

    // 3. Proforma Register Entries
    proformaRegisterList: [
      {
        id: 1,
        regCode: 'REG-INV-2026-1041',
        refDoc: 'PI-PM-2026-0891',
        regDate: '2026-10-28',
        supplier: 'Sri Venkateswara Packaging Ltd',
        category: 'Packing Material',
        itemDescription: '7-Ply Corrugated Master Cartons (1 X 10 KGS IQF Print)',
        storeLocation: 'Coldstore Packaging Vault #1',
        quantity: 35000,
        unit: 'MCs',
        rate: 58.50,
        taxAmount: 245700,
        totalInvoiced: 2293200,
        stockStatus: 'In Stock',
        auditStatus: 'Verified'
      },
      {
        id: 2,
        regCode: 'REG-INV-2026-1042',
        refDoc: 'PI-PM-2026-0892',
        regDate: '2026-10-27',
        supplier: 'Apex Polymers & Films India Ltd',
        category: 'Packing Material',
        itemDescription: 'Printed LDPE 2-Lb Gusseted Shrimp Bags with Zipper',
        storeLocation: 'Central Store Bay C-4',
        quantity: 60000,
        unit: 'Bags',
        rate: 3.40,
        taxAmount: 36720,
        totalInvoiced: 240720,
        stockStatus: 'In Stock',
        auditStatus: 'Verified'
      }
    ]
  },

  // Main Route Handler
  render(containerId, subPage = 'indent-page', activeHash = '#/inventory/general-store/indent-page') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div id="inventory-tab-bar-container"></div>
      <div id="inventory-subpage-content" class="space-y-4"></div>
    `;

    TabBar.render('inventory-tab-bar-container', activeHash);
    const subContainer = document.getElementById('inventory-subpage-content');
    if (!subContainer) return;

    const cleanHash = (activeHash || '').toLowerCase();

    // Packing Material sub-tabs routing
    if (cleanHash.includes('packing-material')) {
      if (cleanHash.includes('purchase-orders')) {
        this.renderPackingMaterialPurchaseOrders(subContainer);
      } else if (cleanHash.includes('goods-receipt-note')) {
        this.renderPackingMaterialGRN(subContainer);
      } else if (cleanHash.includes('material-issue')) {
        this.renderPackingMaterialMaterialIssue(subContainer);
      } else {
        this.renderPackingMaterialProformaInvoice(subContainer);
      }
    } else if (cleanHash.includes('general-store')) {
      if (cleanHash.includes('proforma-order')) {
        this.renderGeneralStoreProformaOrder(subContainer);
      } else if (cleanHash.includes('goods-receipt-note')) {
        this.renderGeneralStoreGRN(subContainer);
      } else if (cleanHash.includes('material-issue')) {
        this.renderGeneralStoreMaterialIssue(subContainer);
      } else {
        this.renderGeneralStoreIndentPage(subContainer);
      }
    } else if (cleanHash.includes('proforma-register') || cleanHash.includes('inventory/inventory')) {
      this.renderInventoryProformaRegister(subContainer);
    } else {
      // Default: Indent Page (GS)
      this.renderGeneralStoreIndentPage(subContainer);
    }
  },

  // =========================================================================
  // 1. GENERAL STORE &rarr; INDENT PAGE (GS)
  // Form Input Fields: DOC NO, DATE, DEPARTMENT, NARRATION
  // Item Details Fields: Item, UoM, Available Qty, Requested Qty, Purpose, Attachment, Remarks, Action
  // Search & Filter
  // Table Columns: S No, Doc No, Date, Actions (only Edit & Delete with Modal.confirm)
  // =========================================================================
  renderGeneralStoreIndentPage(container) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextDocNum = (this.state.indentPageRecords?.length || 0) + 1;
    const defaultDocNo = `DOC-GS-2026-${String(nextDocNum).padStart(4, '0')}`;

    // Local array for currently staged items in the form
    let stagedItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 25,
        requestedQty: 100,
        purpose: 'Daily processing line hygiene requirement',
        attachment: 'gloves_cert.pdf',
        remarks: 'Urgent for Shift A'
      }
    ];

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Indent Page (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-btn-toggle-form" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="gs-form-toggle-text">Indent Page</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card (calibrated as per the form data) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="gs-search-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="gs-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="gs-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="gs-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- Filter: DOC NO -->
          <div>
            <label for="gs-filter-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
            <input type="text" id="gs-filter-docno" placeholder="Search by Doc No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DATE -->
          <div>
            <label for="gs-filter-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" id="gs-filter-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: DEPARTMENT -->
          <div>
            <label for="gs-filter-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="gs-filter-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Departments</option>
              <option value="Processing Unit-5">Processing Unit-5</option>
              <option value="Coldstore Hub">Coldstore Hub</option>
              <option value="Quality Control Lab">Quality Control Lab</option>
              <option value="Engineering & Maintenance">Engineering & Maintenance</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
              <option value="Administration & Safety">Administration & Safety</option>
            </select>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="gs-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card (S No, Doc No, Date, Actions with only edit, delete icon) -->
      <div id="gs-indents-table-container"></div>
    `;

    // 1. Direct Click Handler for "Indent Page" Button -> Opens Add Indent Modal Popup
    const toggleBtn = container.querySelector('#gs-btn-toggle-form');
    toggleBtn?.addEventListener('click', () => {
      this.showAddIndentModal(() => {
        renderTable(this.state.indentPageRecords);
      });
    });

    // 2. Data Table Rendering: S No, Doc No, Date, Actions (only Edit & Delete with Modal.confirm)
    let currentData = [...this.state.indentPageRecords];

    const renderTable = (data) => {
      currentData = data;
      new DataTable({
        containerId: 'gs-indents-table-container',
        tableTitle: `Indent Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showIndentDetailsModal(row);
        },
        columns: [
          // 1. S No (Clickable to show whole details in popup)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full indent details">${idx + 1}</span>
            `
          },
          // 2. Doc No (Clickable to show whole details in popup)
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col cursor-pointer" title="Click to view full indent details">
                <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.department} (${r.items?.length || 0} items)</span>
              </div>
            `
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          }
        ],
        // Actions column: ONLY Edit and Delete icon with confirmation popup
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'Edit',
            title: 'Edit Indent',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditIndentModal(row, () => {
                renderTable(this.state.indentPageRecords);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Indent',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Indent Record',
                message: `Are you sure you want to permanently delete Indent <strong>${row.docNo}</strong> (${row.department}, Date: ${row.date})? This action cannot be undone.`,
                confirmText: 'Delete Indent',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.indentPageRecords.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.indentPageRecords.splice(idx, 1);
                    renderTable(this.state.indentPageRecords);
                    Toast.show(`Indent ${row.docNo} permanently deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.indentPageRecords);

    // 7. Search & Filter Handlers
    container.querySelector('#gs-search-btn')?.addEventListener('click', () => {
      const docVal = container.querySelector('#gs-filter-docno')?.value?.trim().toLowerCase();
      const dateVal = container.querySelector('#gs-filter-date')?.value;
      const deptVal = container.querySelector('#gs-filter-dept')?.value;

      const filtered = this.state.indentPageRecords.filter(it => {
        if (docVal && !it.docNo.toLowerCase().includes(docVal)) return false;
        if (dateVal && it.date !== dateVal) return false;
        if (deptVal && deptVal !== 'ALL' && it.department !== deptVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching indent record(s)`, 'info');
    });

    container.querySelector('#gs-search-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#gs-filter-docno').value = '';
      container.querySelector('#gs-filter-date').value = '';
      container.querySelector('#gs-filter-dept').value = 'ALL';
      renderTable(this.state.indentPageRecords);
      Toast.show('Indent filters reset', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#gs-filter-body');
    const toggleIcon = container.querySelector('#gs-filter-toggle-icon');
    container.querySelector('#gs-filter-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // Edit Indent Modal (with Modal.confirm on save)
  // 1b. ADD INDENT MODAL POPUP
  showAddIndentModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextDocNum = (this.state.indentPageRecords?.length || 0) + 1;
    const defaultDocNo = `DOC-GS-2026-${String(nextDocNum).padStart(4, '0')}`;

    let modalStagedItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 25,
        requestedQty: 100,
        purpose: 'Daily processing line hygiene requirement',
        attachment: 'gloves_cert.pdf',
        remarks: 'Urgent for Shift A'
      }
    ];

    Modal.open({
      title: 'Add General Store Indent',
      size: '3xl',
      confirmActions: false,
      content: `
        <form id="modal-add-indent-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Indent Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="modal-indent-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-indent-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="modal-indent-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-indent-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. DEPARTMENT -->
              <div>
                <label for="modal-indent-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
                <select id="modal-indent-dept" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Processing Unit-5" selected>Processing Unit-5</option>
                  <option value="Coldstore Hub">Coldstore Hub</option>
                  <option value="Quality Control Lab">Quality Control Lab</option>
                  <option value="Engineering & Maintenance">Engineering & Maintenance</option>
                  <option value="Pre-Processing Unit">Pre-Processing Unit</option>
                  <option value="Administration & Safety">Administration & Safety</option>
                </select>
              </div>

              <!-- 4. NARRATION -->
              <div>
                <label for="modal-indent-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="modal-indent-narration" placeholder="Enter indent purpose / narration..." value="Monthly store requisition for seafood processing shift consumables" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Item Details Section -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details</h4>
              </div>
              <span id="modal-staged-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">${modalStagedItems.length} Item(s) Added</span>
            </div>

            <!-- Item Input Grid Card -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Item -->
                <div>
                  <label for="modal-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="modal-item-name" placeholder="Item name, specification..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM -->
                <div>
                  <label for="modal-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM <span class="text-[#DE350B]">*</span></label>
                  <select id="modal-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                    <option value="Bags">Bags</option>
                  </select>
                </div>

                <!-- 3. Available Qty -->
                <div>
                  <label for="modal-item-avail" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="modal-item-avail" value="10" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- 4. Requested Qty -->
                <div>
                  <label for="modal-item-req" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REQUESTED QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="modal-item-req" value="50" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 5. Purpose -->
                <div>
                  <label for="modal-item-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="modal-item-purpose" placeholder="Operational purpose..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Attachment -->
                <div>
                  <label for="modal-item-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="modal-item-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 7. Remarks -->
                <div>
                  <label for="modal-item-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="modal-item-remarks" placeholder="Optional notes / remarks..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 8. Action (Add Item Button - placed right after Remarks with max width) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Items Preview Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">Available Qty</th>
                    <th class="py-2.5 px-3 text-right">Requested Qty</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Indent',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#modal-indent-docno')?.value?.trim();
            const date = modalRoot.querySelector('#modal-indent-date')?.value;
            const department = modalRoot.querySelector('#modal-indent-dept')?.value;
            const narration = modalRoot.querySelector('#modal-indent-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              return;
            }
            if (modalStagedItems.length === 0) {
              Toast.show('Please add at least one item before saving.', 'warning');
              return;
            }

            Modal.confirm({
              title: 'Confirm Save Indent',
              message: `Are you sure you want to save General Store Indent <strong>${docNo}</strong> for <strong>${department}</strong> with <strong>${modalStagedItems.length} item(s)</strong>?`,
              confirmText: 'Save Indent',
              onConfirm: () => {
                const newRecord = {
                  id: Date.now(),
                  docNo,
                  date,
                  department,
                  status: 'Approved',
                  narration,
                  items: [...modalStagedItems]
                };

                this.state.indentPageRecords.unshift(newRecord);
                Modal.close();
                Toast.show(`Indent ${docNo} successfully saved!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    const renderModalStagedItems = () => {
      const tbody = modalRoot.querySelector('#modal-staged-tbody');
      const countEl = modalRoot.querySelector('#modal-staged-count');
      if (!tbody) return;

      if (countEl) countEl.textContent = `${modalStagedItems.length} Item(s) Added`;

      if (modalStagedItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="8" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty}</td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
          <td class="py-2 px-3">
            ${it.attachment ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                ${it.attachment}
              </span>
            ` : '<span class="text-[#94A3B8] italic">None</span>'}
          </td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
          <td class="py-2 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-remove-item-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedItems.splice(rIdx, 1);
          renderModalStagedItems();
        });
      });
    };

    renderModalStagedItems();

    modalRoot.querySelector('#modal-btn-add-item')?.addEventListener('click', () => {
      const itemNameInput = modalRoot.querySelector('#modal-item-name');
      const uomInput = modalRoot.querySelector('#modal-item-uom');
      const availInput = modalRoot.querySelector('#modal-item-avail');
      const reqInput = modalRoot.querySelector('#modal-item-req');
      const purposeInput = modalRoot.querySelector('#modal-item-purpose');
      const attachInput = modalRoot.querySelector('#modal-item-attach');
      const remarksInput = modalRoot.querySelector('#modal-item-remarks');

      const itemName = itemNameInput?.value?.trim();
      const reqQty = parseInt(reqInput?.value, 10);

      if (!itemName) {
        Toast.show('Please enter Item description before adding.', 'warning');
        itemNameInput?.focus();
        return;
      }
      if (!reqQty || reqQty <= 0) {
        Toast.show('Please enter a valid Requested Quantity (> 0).', 'warning');
        reqInput?.focus();
        return;
      }

      const fileAttached = attachInput?.files && attachInput.files.length > 0 ? attachInput.files[0].name : '';

      modalStagedItems.push({
        item: itemName,
        uom: uomInput?.value || 'Nos',
        availableQty: parseInt(availInput?.value, 10) || 0,
        requestedQty: reqQty,
        purpose: purposeInput?.value?.trim() || '',
        attachment: fileAttached,
        remarks: remarksInput?.value?.trim() || ''
      });

      itemNameInput.value = '';
      reqInput.value = '50';
      if (purposeInput) purposeInput.value = '';
      if (remarksInput) remarksInput.value = '';
      if (attachInput) attachInput.value = '';

      renderModalStagedItems();
      Toast.show(`Item "${itemName}" added to indent.`, 'info');
    });
  },

  // 1c. INDENT WHOLE DETAILS MODAL POPUP (Triggered on click S No / row)
  showIndentDetailsModal(record) {
    if (!record) return;

    const items = record.items || [];
    const statusCls = record.status === 'Approved'
      ? 'bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]'
      : record.status === 'In Procurement'
      ? 'bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]'
      : record.status === 'Pending'
      ? 'bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]'
      : 'bg-[#F4F5F7] text-[#42526E] border border-[#DFE1E6]';

    const itemsRows = items.length > 0 ? items.map((it, idx) => `
      <tr class="hover:bg-[#F8FAFC] transition-colors border-b border-[#DFE1E6]">
        <td class="py-2.5 px-3 text-[#5E6C84] font-semibold text-center">${idx + 1}</td>
        <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
        <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom || 'Nos'}</td>
        <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.availableQty ?? 0}</td>
        <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.requestedQty ?? 0}</td>
        <td class="py-2.5 px-3 text-[#5E6C84]">${it.purpose || '-'}</td>
        <td class="py-2.5 px-3">
          ${it.attachment ? `
            <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
              ${it.attachment}
            </span>
          ` : '<span class="text-[#94A3B8] italic">None</span>'}
        </td>
        <td class="py-2.5 px-3 text-[#5E6C84]">${it.remarks || '-'}</td>
      </tr>
    `).join('') : `
      <tr>
        <td colspan="8" class="text-center py-4 text-xs text-[#94A3B8] italic">No items listed in this indent requisition.</td>
      </tr>
    `;

    Modal.open({
      title: `Indent Requisition Details - ${record.docNo}`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Overview Header Card -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-4">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
                <span class="font-mono font-bold text-sm text-[#00A4B7]">${record.docNo}</span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
                <span class="font-semibold text-xs text-[#172B4D] flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  ${record.date}
                </span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DEPARTMENT</span>
                <span class="font-semibold text-xs text-[#172B4D] flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  ${record.department}
                </span>
              </div>
              <div>
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">STATUS</span>
                <span class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusCls}">
                  ${record.status || 'Approved'}
                </span>
              </div>
            </div>

            ${record.narration ? `
              <div class="mt-3 pt-3 border-t border-[#E2E8F0]">
                <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">NARRATION / PURPOSE</span>
                <p class="text-xs text-[#172B4D] font-medium leading-relaxed">${record.narration}</p>
              </div>
            ` : ''}
          </div>

          <!-- Requisitioned Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="px-4 py-2.5 bg-[#FAFBFC] border-b border-[#DFE1E6] flex items-center justify-between">
              <h3 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Requisitioned Items (${items.length})
              </h3>
              <span class="text-[11px] font-semibold text-[#5E6C84]">Total Requested: <strong>${items.reduce((acc, it) => acc + (it.requestedQty || 0), 0)} units</strong></span>
            </div>

            <div class="overflow-x-auto w-full">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3 text-center w-12">S.No</th>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">Available Qty</th>
                    <th class="py-2.5 px-3 text-right">Requested Qty</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${itemsRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          onClick: () => Modal.close()
        },
        {
          label: 'Edit Indent',
          type: 'primary',
          class: 'btn-primary border-0 px-5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Modal.close();
            this.showEditIndentModal(record, () => {
              const currentTableContainer = document.getElementById('gs-indent-table-container');
              if (currentTableContainer) {
                this.renderGeneralStoreIndentPage(currentTableContainer.parentElement);
              }
            });
          }
        }
      ]
    });
  },

  showEditIndentModal(row, onSuccess) {
    Modal.open({
      title: `Edit Indent: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-indent" class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-red-500">*</span></label>
              <input type="date" name="date" value="${row.date}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-red-500">*</span></label>
              <select name="department" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg font-semibold focus:outline-none focus:border-[#00A4B7]">
                <option value="Processing Unit-5" ${row.department === 'Processing Unit-5' ? 'selected' : ''}>Processing Unit-5</option>
                <option value="Coldstore Hub" ${row.department === 'Coldstore Hub' ? 'selected' : ''}>Coldstore Hub</option>
                <option value="Quality Control Lab" ${row.department === 'Quality Control Lab' ? 'selected' : ''}>Quality Control Lab</option>
                <option value="Engineering & Maintenance" ${row.department === 'Engineering & Maintenance' ? 'selected' : ''}>Engineering & Maintenance</option>
                <option value="Pre-Processing Unit" ${row.department === 'Pre-Processing Unit' ? 'selected' : ''}>Pre-Processing Unit</option>
                <option value="Administration & Safety" ${row.department === 'Administration & Safety' ? 'selected' : ''}>Administration & Safety</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]">${row.narration || ''}</textarea>
          </div>

          <!-- Existing Items List Preview -->
          <div class="border border-[#E2E8F0] rounded-lg p-3 bg-[#F8FAFC]">
            <h4 class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-2">Indent Item Details (${row.items?.length || 0})</h4>
            <div class="space-y-1.5">
              ${(row.items || []).map(it => `
                <div class="flex items-center justify-between text-xs py-1 px-2 bg-white rounded border border-[#E2E8F0]">
                  <span class="font-semibold text-[#172B4D]">${it.item}</span>
                  <span class="font-mono font-bold text-[#00A4B7]">${it.requestedQty} ${it.uom}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        { label: 'Cancel', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Update Indent',
          type: 'primary',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-indent');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Indent',
              message: `Are you sure you want to update General Store Indent <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Indent',
              onConfirm: () => {
                row.date = fd.get('date');
                row.department = fd.get('department');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Indent ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // Additional General Store Tabs (Proforma Order, Proforma List, GRN, GRN List, Material Issue)
  // =========================================================================
  renderGeneralStoreProformaOrder(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma Order (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-po-toggle-form-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="gs-po-toggle-text">Add Proforma Order</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="gs-po-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="gs-po-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="gs-po-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="gs-po-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- Filter: DOC NO / CODE -->
          <div>
            <label for="po-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO / CODE</label>
            <input type="text" id="po-flt-doc" placeholder="Search Doc No or Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: FROM DATE -->
          <div>
            <label for="po-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="po-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: TO DATE -->
          <div>
            <label for="po-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="po-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Filter: SUPPLIER & SEARCH -->
          <div class="flex items-end gap-2">
            <div class="flex-1 min-w-0">
              <label for="po-flt-sup" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER</label>
              <select id="po-flt-sup" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="ALL">All Suppliers</option>
                <option value="Devi Safety Aids & Industrial Supplies">Devi Safety Aids</option>
                <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara</option>
                <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering</option>
                <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific</option>
                <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes</option>
              </select>
            </div>
            <button type="button" id="po-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing POs Table Card: S No, Doc No, Code, Date, Supplier, Actions -->
      <div id="gs-po-table-container"></div>
    `;

    // Direct Click Handler for "Add Proforma Order" Button -> Opens Add PO Modal Popup
    container.querySelector('#gs-po-toggle-form-btn')?.addEventListener('click', () => {
      this.showAddProformaOrderModal(() => {
        renderTable(this.state.proformaOrderList);
      });
    });

    // Render Existing POs Table: S No, Doc No, Code, Date, Supplier, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-po-table-container',
        tableTitle: `Existing General Store Proforma Orders (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showProformaOrderDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable to show whole details in popup)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full PO details">${idx + 1}</span>
            `
          },
          // 2. Doc No (Clickable to show whole details in popup)
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view full PO details">${v}</span>
            `
          },
          // 3. Code
          {
            field: 'code',
            header: 'Code',
            sortable: true,
            render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>`
          },
          // 4. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 5. Supplier
          {
            field: 'supplier',
            header: 'Supplier',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.paymentTerms} • ${r.freightType}</span>
              </div>
            `
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View PO Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showProformaOrderDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Proforma Order',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditProformaOrderModal(row, () => {
                renderTable(this.state.proformaOrderList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Proforma Order',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Proforma Order',
                message: `Are you sure you want to delete Proforma Order <strong>${row.docNo}</strong> (${row.supplier})? This action cannot be undone.`,
                confirmText: 'Delete Order',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.proformaOrderList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.proformaOrderList.splice(idx, 1);
                    renderTable(this.state.proformaOrderList);
                    Toast.show(`Proforma Order ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.proformaOrderList);

    // Search & Filter Handlers
    container.querySelector('#po-flt-search-btn')?.addEventListener('click', () => {
      const docVal = container.querySelector('#po-flt-doc')?.value?.trim().toLowerCase();
      const fromVal = container.querySelector('#po-flt-from')?.value;
      const toVal = container.querySelector('#po-flt-to')?.value;
      const supVal = container.querySelector('#po-flt-sup')?.value;

      const filtered = this.state.proformaOrderList.filter(it => {
        if (docVal) {
          const matchDoc = it.docNo.toLowerCase().includes(docVal);
          const matchCode = it.code?.toLowerCase().includes(docVal);
          if (!matchDoc && !matchCode) return false;
        }
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        if (supVal && supVal !== 'ALL' && it.supplier !== supVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching proforma order(s)`, 'info');
    });

    container.querySelector('#gs-po-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#po-flt-doc').value = '';
      container.querySelector('#po-flt-from').value = '2026-10-01';
      container.querySelector('#po-flt-to').value = todayStr;
      container.querySelector('#po-flt-sup').value = 'ALL';
      renderTable(this.state.proformaOrderList);
      Toast.show('PO filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const poFilterBody = container.querySelector('#gs-po-filter-body');
    const poToggleIcon = container.querySelector('#gs-po-filter-toggle-icon');
    container.querySelector('#gs-po-filter-toggle-btn')?.addEventListener('click', () => {
      if (poFilterBody) {
        poFilterBody.classList.toggle('hidden');
        if (poToggleIcon) {
          poToggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // 3b. ADD PROFORMA ORDER MODAL POPUP
  showAddProformaOrderModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextPoNum = (this.state.proformaOrderList?.length || 0) + 1;
    const defaultDocNo = `PO-GS-2026-${String(100 + nextPoNum).padStart(4, '0')}`;
    const defaultCode = `COD-GS-${8810 + nextPoNum}`;

    let modalStagedPoItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        unit: 'Box',
        availQty: 15,
        unitPrice: 280.00,
        quantity: 100,
        supplierRate: 280.00,
        totalValue: 28000.00,
        discountPercent: 5,
        discountAmt: 1400.00,
        gstPercent: 18,
        sgstAmt: 2394.00,
        cgstAmt: 2394.00,
        igstAmt: 0.00,
        taxAmount: 4788.00,
        invoiceAmt: 31388.00,
        dispatchedDate: todayStr
      }
    ];

    Modal.open({
      title: 'Add General Store Proforma Order',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-po-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Order Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="modal-po-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-po-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. CODE -->
              <div>
                <label for="modal-po-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="modal-po-code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 3. DATE -->
              <div>
                <label for="modal-po-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-po-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 4. SUPPLIER FIRM NAME -->
              <div>
                <label for="modal-po-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-supplier" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Devi Safety Aids & Industrial Supplies" selected>Devi Safety Aids &amp; Industrial Supplies</option>
                  <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering &amp; Spare Parts Ltd</option>
                  <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific Instruments India</option>
                  <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes Corp</option>
                </select>
              </div>

              <!-- 5. PAYMENT & TERMS -->
              <div>
                <label for="modal-po-terms" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT &amp; TERMS <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-terms" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="30 Days from Inward" selected>30 Days from Inward</option>
                  <option value="Immediate against Inward">Immediate against Inward</option>
                  <option value="50% Advance / 50% Delivery">50% Advance / 50% Delivery</option>
                  <option value="Net 15 Days">Net 15 Days</option>
                </select>
              </div>

              <!-- 6. FREIGHT TYPE -->
              <div>
                <label for="modal-po-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-freight" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Paid by Supplier" selected>Paid by Supplier</option>
                  <option value="To Pay (Consignee)">To Pay (Consignee)</option>
                  <option value="FOB Ex-Factory">FOB Ex-Factory</option>
                  <option value="CIF Visakhapatnam">CIF Visakhapatnam</option>
                </select>
              </div>

              <!-- 7. SUB DELIVERY DATE -->
              <div>
                <label for="modal-po-del-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUB DELIVERY DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="modal-po-del-date" value="2026-11-04" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 8. STATUS -->
              <div>
                <label for="modal-po-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="modal-po-status" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Approved" selected>Approved</option>
                  <option value="Issued to Vendor">Issued to Vendor</option>
                  <option value="Pending Delivery">Pending Delivery</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              <!-- 9. NARRATION (Full width) -->
              <div class="sm:col-span-2 md:col-span-3 lg:col-span-4">
                <label for="modal-po-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="modal-po-narration" placeholder="Proforma order purpose / notes..." value="General Store approved indent procurement order" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow (From Indent) - Item Details</h4>
              </div>
              <span id="modal-po-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedPoItems.length} Item(s) in Order
              </span>
            </div>

            <!-- Item Input Grid Card -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Item -->
                <div class="md:col-span-2">
                  <label for="mpoi-item" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mpoi-item" placeholder="Item name or code..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. Unit -->
                <div>
                  <label for="mpoi-unit" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT</label>
                  <select id="mpoi-unit" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                  </select>
                </div>

                <!-- 3. Available Qty -->
                <div>
                  <label for="mpoi-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAIL QTY</label>
                  <input type="number" id="mpoi-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. Unit Price -->
                <div>
                  <label for="mpoi-unit-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UNIT PRICE (₹)</label>
                  <input type="number" id="mpoi-unit-price" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Quantity -->
                <div>
                  <label for="mpoi-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mpoi-qty" value="100" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Supplier Rate -->
                <div>
                  <label for="mpoi-supplier-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER RATE (₹)</label>
                  <input type="number" id="mpoi-supplier-rate" value="280.00" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 7. Total Value -->
                <div>
                  <label for="mpoi-total-value" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL VALUE (₹)</label>
                  <input type="number" id="mpoi-total-value" value="28000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 3 -->
                <!-- 8. Discount% -->
                <div>
                  <label for="mpoi-disc-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT%</label>
                  <input type="number" id="mpoi-disc-pct" value="5" min="0" max="100" step="0.5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Discount Amount -->
                <div>
                  <label for="mpoi-disc-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISCOUNT (₹)</label>
                  <input type="number" id="mpoi-disc-amt" value="1400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-semibold text-[#D97706] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. GST% -->
                <div>
                  <label for="mpoi-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST%</label>
                  <select id="mpoi-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="18" selected>18% GST</option>
                    <option value="12">12% GST</option>
                    <option value="5">5% GST</option>
                    <option value="0">0% GST</option>
                  </select>
                </div>

                <!-- 11. Dispatched Date -->
                <div>
                  <label for="mpoi-dispatch-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISPATCHED DATE</label>
                  <div class="erp-date-wrapper">
                    <input type="date" id="mpoi-dispatch-date" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                  </div>
                </div>

                <!-- Row 4 -->
                <!-- 12. SGST Amt -->
                <div>
                  <label for="mpoi-sgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SGST AMT (₹)</label>
                  <input type="number" id="mpoi-sgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 13. CGST Amt -->
                <div>
                  <label for="mpoi-cgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CGST AMT (₹)</label>
                  <input type="number" id="mpoi-cgst" value="2394.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 14. IGST Amt -->
                <div>
                  <label for="mpoi-igst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IGST AMT (₹)</label>
                  <input type="number" id="mpoi-igst" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono text-xs text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 15. Tax Amount -->
                <div>
                  <label for="mpoi-tax-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TAX AMOUNT (₹)</label>
                  <input type="number" id="mpoi-tax-amt" value="4788.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#0284C7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 5 -->
                <!-- 16. Invoice Amount (Col 1) -->
                <div>
                  <label for="mpoi-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMT (₹)</label>
                  <input type="number" id="mpoi-inv-amt" value="31388.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 17. Action Button (Col 2 - directly after Invoice Amt) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-po-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Order Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">Unit</th>
                    <th class="py-2.5 px-3 text-right">Qty</th>
                    <th class="py-2.5 px-3 text-right">Unit Price</th>
                    <th class="py-2.5 px-3 text-right">Total Val</th>
                    <th class="py-2.5 px-3 text-right">Disc%</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Tax Amt</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3">Dispatch Date</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-po-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary px-5 py-2 rounded-full text-xs font-semibold border border-[#CBD5E1] text-[#475569] hover:bg-[#F8FAFC] cursor-pointer transition-colors',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Proforma Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#modal-po-docno')?.value?.trim();
            const code = modalRoot.querySelector('#modal-po-code')?.value?.trim();
            const date = modalRoot.querySelector('#modal-po-date')?.value;
            const supplier = modalRoot.querySelector('#modal-po-supplier')?.value;
            const paymentTerms = modalRoot.querySelector('#modal-po-terms')?.value;
            const freightType = modalRoot.querySelector('#modal-po-freight')?.value;
            const subDeliveryDate = modalRoot.querySelector('#modal-po-del-date')?.value;
            const narration = modalRoot.querySelector('#modal-po-narration')?.value?.trim();
            const status = modalRoot.querySelector('#modal-po-status')?.value;

            if (!docNo || !code) {
              Toast.show('DOC NO and CODE are required.', 'warning');
              return;
            }
            if (modalStagedPoItems.length === 0) {
              Toast.show('Please add at least one item to this Proforma Order.', 'warning');
              return;
            }

            const totalOrderVal = modalStagedPoItems.reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

            Modal.confirm({
              title: 'Confirm Save Proforma Order',
              message: `Are you sure you want to save General Store Proforma Order <strong>${docNo}</strong> (Code: ${code}) for <strong>${supplier}</strong> totalling <strong>₹${totalOrderVal.toLocaleString()}</strong>?`,
              confirmText: 'Save Proforma Order',
              onConfirm: () => {
                const newPo = {
                  id: (this.state.proformaOrderList?.length || 0) + 1,
                  docNo,
                  code,
                  date,
                  supplier,
                  paymentTerms,
                  freightType,
                  subDeliveryDate,
                  narration,
                  status,
                  items: [...modalStagedPoItems]
                };

                this.state.proformaOrderList.unshift(newPo);
                Modal.close();
                Toast.show(`Proforma Order ${docNo} created successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Calculation logic in modal
    const recalcModalItemInputs = () => {
      const price = parseFloat(modalRoot.querySelector('#mpoi-unit-price')?.value) || 0;
      const qty = parseInt(modalRoot.querySelector('#mpoi-qty')?.value, 10) || 0;
      const rateInput = modalRoot.querySelector('#mpoi-supplier-rate');
      if (rateInput && !rateInput.matches(':focus')) {
        rateInput.value = price.toFixed(2);
      }
      const actualRate = parseFloat(rateInput?.value) || price;
      const totalVal = qty * actualRate;

      const discPct = parseFloat(modalRoot.querySelector('#mpoi-disc-pct')?.value) || 0;
      const discAmt = totalVal * (discPct / 100);
      const taxable = Math.max(0, totalVal - discAmt);

      const gstPct = parseFloat(modalRoot.querySelector('#mpoi-gst-pct')?.value) || 18;
      const taxAmt = taxable * (gstPct / 100);
      const sgst = taxAmt / 2;
      const cgst = taxAmt / 2;
      const igst = 0;
      const invAmt = taxable + taxAmt;

      const totalValEl = modalRoot.querySelector('#mpoi-total-value');
      const discAmtEl = modalRoot.querySelector('#mpoi-disc-amt');
      const sgstEl = modalRoot.querySelector('#mpoi-sgst');
      const cgstEl = modalRoot.querySelector('#mpoi-cgst');
      const igstEl = modalRoot.querySelector('#mpoi-igst');
      const taxAmtEl = modalRoot.querySelector('#mpoi-tax-amt');
      const invAmtEl = modalRoot.querySelector('#mpoi-inv-amt');

      if (totalValEl) totalValEl.value = totalVal.toFixed(2);
      if (discAmtEl) discAmtEl.value = discAmt.toFixed(2);
      if (sgstEl) sgstEl.value = sgst.toFixed(2);
      if (cgstEl) cgstEl.value = cgst.toFixed(2);
      if (igstEl) igstEl.value = igst.toFixed(2);
      if (taxAmtEl) taxAmtEl.value = taxAmt.toFixed(2);
      if (invAmtEl) invAmtEl.value = invAmt.toFixed(2);
    };

    ['#mpoi-unit-price', '#mpoi-qty', '#mpoi-supplier-rate', '#mpoi-disc-pct', '#mpoi-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcModalItemInputs);
    });

    const renderModalStagedPoItems = () => {
      const tbody = modalRoot.querySelector('#modal-po-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-po-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedPoItems.length} Item(s) in Order`;

      if (modalStagedPoItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="11" class="text-center py-4 text-xs text-[#94A3B8] italic">No items added to this proforma order yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedPoItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.unit}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.unitPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold text-[#172B4D]">₹${Number(it.totalValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#D97706]">${it.discountPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#0284C7]">₹${Number(it.taxAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmt).toFixed(2)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-[#5E6C84]">${it.dispatchedDate || '-'}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-po-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-po-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedPoItems.splice(rIdx, 1);
          renderModalStagedPoItems();
        });
      });
    };

    renderModalStagedPoItems();

    modalRoot.querySelector('#modal-po-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#mpoi-item')?.value?.trim();
      const unit = modalRoot.querySelector('#mpoi-unit')?.value;
      const availQty = parseInt(modalRoot.querySelector('#mpoi-avail-qty')?.value, 10) || 0;
      const unitPrice = parseFloat(modalRoot.querySelector('#mpoi-unit-price')?.value) || 0;
      const quantity = parseInt(modalRoot.querySelector('#mpoi-qty')?.value, 10) || 0;
      const supplierRate = parseFloat(modalRoot.querySelector('#mpoi-supplier-rate')?.value) || unitPrice;
      const totalValue = parseFloat(modalRoot.querySelector('#mpoi-total-value')?.value) || 0;
      const discountPercent = parseFloat(modalRoot.querySelector('#mpoi-disc-pct')?.value) || 0;
      const discountAmt = parseFloat(modalRoot.querySelector('#mpoi-disc-amt')?.value) || 0;
      const gstPercent = parseFloat(modalRoot.querySelector('#mpoi-gst-pct')?.value) || 0;
      const sgstAmt = parseFloat(modalRoot.querySelector('#mpoi-sgst')?.value) || 0;
      const cgstAmt = parseFloat(modalRoot.querySelector('#mpoi-cgst')?.value) || 0;
      const igstAmt = parseFloat(modalRoot.querySelector('#mpoi-igst')?.value) || 0;
      const taxAmount = parseFloat(modalRoot.querySelector('#mpoi-tax-amt')?.value) || 0;
      const invoiceAmt = parseFloat(modalRoot.querySelector('#mpoi-inv-amt')?.value) || 0;
      const dispatchedDate = modalRoot.querySelector('#mpoi-dispatch-date')?.value;

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#mpoi-item')?.focus();
        return;
      }
      if (quantity <= 0) {
        Toast.show('Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#mpoi-qty')?.focus();
        return;
      }

      modalStagedPoItems.push({
        item,
        unit,
        availQty,
        unitPrice,
        quantity,
        supplierRate,
        totalValue,
        discountPercent,
        discountAmt,
        gstPercent,
        sgstAmt,
        cgstAmt,
        igstAmt,
        taxAmount,
        invoiceAmt,
        dispatchedDate
      });

      renderModalStagedPoItems();
      Toast.show(`Item "${item}" added to Proforma Order.`, 'info');
    });
  },

  // View PO Detail Modal
  showProformaOrderDetailModal(row) {
    const totalVal = (row.items || []).reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

    Modal.open({
      title: `Proforma Order Details: ${row.docNo} (${row.code})`,
      size: 'xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-xl">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">CODE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.code}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">STATUS</span>
              <span class="font-bold text-xs text-[#00875A]">${row.status}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white border border-[#E2E8F0] p-3 rounded-xl">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">SUPPLIER</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.supplier}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">PAYMENT TERMS</span>
              <span class="text-xs text-[#5E6C84]">${row.paymentTerms}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase">FREIGHT TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.freightType}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase mb-0.5">NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details (${row.items?.length || 0})</h4>
              <span class="font-mono font-bold text-xs text-[#00875A]">Total PO Value: ₹${Number(totalVal).toLocaleString()}</span>
            </div>
            <div class="overflow-x-auto border border-[#E2E8F0] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-bold text-[11px] uppercase">
                  <tr>
                    <th class="py-2 px-3">Item</th>
                    <th class="py-2 px-3">Unit</th>
                    <th class="py-2 px-3 text-right">Qty</th>
                    <th class="py-2 px-3 text-right">Unit Price</th>
                    <th class="py-2 px-3 text-right">Disc%</th>
                    <th class="py-2 px-3 text-right">GST%</th>
                    <th class="py-2 px-3 text-right">Tax Amt</th>
                    <th class="py-2 px-3 text-right">Invoice Amt</th>
                    <th class="py-2 px-3">Dispatched</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2 px-3 font-mono text-[#5E6C84]">${it.unit}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
                      <td class="py-2 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.unitPrice).toFixed(2)}</td>
                      <td class="py-2 px-3 text-right font-mono text-[#D97706]">${it.discountPercent}%</td>
                      <td class="py-2 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2 px-3 text-right font-mono text-[#0284C7]">₹${Number(it.taxAmount).toFixed(2)}</td>
                      <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmt).toFixed(2)}</td>
                      <td class="py-2 px-3 font-mono text-xs text-[#5E6C84]">${it.dispatchedDate || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        { label: 'Close', type: 'secondary', onClick: (modal) => modal.close() },
        {
          label: 'Print Order',
          type: 'primary',
          onClick: () => {
            Toast.show(`Printing Proforma Order ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // Edit PO Modal
  showEditProformaOrderModal(row, onSuccess) {
    Modal.open({
      title: `Edit Proforma Order: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-po" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Order Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="code" value="${row.code}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="supplier" value="${row.supplier}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Approved" ${row.status === 'Approved' ? 'selected' : ''}>Approved</option>
                <option value="Issued to Vendor" ${row.status === 'Issued to Vendor' ? 'selected' : ''}>Issued to Vendor</option>
                <option value="Pending Delivery" ${row.status === 'Pending Delivery' ? 'selected' : ''}>Pending Delivery</option>
                <option value="Completed" ${row.status === 'Completed' ? 'selected' : ''}>Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-po');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Proforma Order',
              message: `Are you sure you want to update Proforma Order <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Order',
              onConfirm: () => {
                row.code = fd.get('code');
                row.date = fd.get('date');
                row.supplier = fd.get('supplier');
                row.status = fd.get('status');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Proforma Order ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // 1c. GENERAL STORE &rarr; GOODS RECEIPT NOTE (GS)
  // Form Input Fields: DOC NO, CODE, DATE, SUPPLIER FIRM NAME, INVOICE NUMBER, INVOICE DATE, PO NO., FREIGHT TYPE, NARRATION, STATUS
  // Work Flow - Item Details Fields: Item, UoM, Available Qty, PO Qty, Received Qty, Deviation Qty, Location, Batch, Item Price, Base Value, Deviation Amount, GST%, GST Tax Amount
  // Table Columns: S No, Vendor, Date, Po No, Invoice No, Code, Actions
  // Search & Filter, Confirmation Modal Popup, View & Edit Modals
  // =========================================================================
  renderGeneralStoreGRN(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Goods Receipt Note (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-grn-add-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Goods Receipts Note</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="grn-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="grn-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="grn-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="grn-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. DOC NO / CODE / PO NO / INV NO -->
          <div>
            <label for="grn-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="grn-flt-doc" placeholder="Doc / PO / Invoice / Code..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. VENDOR -->
          <div>
            <label for="grn-flt-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR</label>
            <select id="grn-flt-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Vendors</option>
              <option value="Devi Safety Aids & Industrial Supplies">Devi Safety Aids</option>
              <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering</option>
              <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara</option>
              <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes</option>
              <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific</option>
            </select>
          </div>

          <!-- 3. FROM DATE -->
          <div>
            <label for="grn-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="grn-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 4. TO DATE -->
          <div>
            <label for="grn-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="grn-flt-to" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="grn-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing Goods Receipt Notes Table Container: S No, Vendor, Date, Po No, Invoice No, Code, Actions -->
      <div id="gs-grn-table-container"></div>
    `;

    // Direct Click Handler for "Add Goods Receipts Note" Button
    container.querySelector('#gs-grn-add-btn')?.addEventListener('click', () => {
      this.showAddGrnModal(() => {
        renderTable(this.state.grnList);
      });
    });

    // Render GRN DataTable
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-grn-table-container',
        tableTitle: `Goods Receipt Notes (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showGrnDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view full GRN details">${idx + 1}</span>
            `
          },
          // 2. Vendor (Supplier Firm Name)
          {
            field: 'supplier',
            header: 'Vendor',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.freightType || 'Standard'} • ${r.status || 'Received'}</span>
              </div>
            `
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 4. Po No
          {
            field: 'poNo',
            header: 'Po No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v || '-'}</span>`
          },
          // 5. Invoice No
          {
            field: 'invoiceNumber',
            header: 'Invoice No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || '-'}</span>
                <span class="text-[10px] text-[#5E6C84] font-mono">Inv Dt: ${r.invoiceDate || '-'}</span>
              </div>
            `
          },
          // 6. Code
          {
            field: 'code',
            header: 'Code',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view GRN details">${v || '-'}</span>`
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View GRN Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showGrnDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Goods Receipt Note',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditGrnModal(row, () => {
                renderTable(this.state.grnList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Goods Receipt Note',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Goods Receipt Note',
                message: `Are you sure you want to delete Goods Receipt Note <strong>${row.docNo}</strong> (${row.supplier})? This action cannot be undone.`,
                confirmText: 'Delete GRN',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.grnList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.grnList.splice(idx, 1);
                    renderTable(this.state.grnList);
                    Toast.show(`Goods Receipt Note ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.grnList);

    // Search & Filter Handlers
    container.querySelector('#grn-flt-search-btn')?.addEventListener('click', () => {
      const searchVal = container.querySelector('#grn-flt-doc')?.value?.trim().toLowerCase();
      const vendorVal = container.querySelector('#grn-flt-vendor')?.value;
      const fromVal = container.querySelector('#grn-flt-from')?.value;
      const toVal = container.querySelector('#grn-flt-to')?.value;

      const filtered = this.state.grnList.filter(it => {
        if (searchVal) {
          const matchDoc = it.docNo?.toLowerCase().includes(searchVal);
          const matchCode = it.code?.toLowerCase().includes(searchVal);
          const matchPo = it.poNo?.toLowerCase().includes(searchVal);
          const matchInv = it.invoiceNumber?.toLowerCase().includes(searchVal);
          if (!matchDoc && !matchCode && !matchPo && !matchInv) return false;
        }
        if (vendorVal && vendorVal !== 'ALL' && it.supplier !== vendorVal) return false;
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching Goods Receipt Note(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#grn-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#grn-flt-doc').value = '';
      container.querySelector('#grn-flt-vendor').value = 'ALL';
      container.querySelector('#grn-flt-from').value = '2026-10-01';
      container.querySelector('#grn-flt-to').value = todayStr;
      renderTable(this.state.grnList);
      Toast.show('GRN filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#grn-flt-body');
    const toggleIcon = container.querySelector('#grn-flt-toggle-icon');
    container.querySelector('#grn-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // 1d. ADD GOODS RECEIPT NOTE (GS) MODAL POPUP
  showAddGrnModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextGrnNum = (this.state.grnList?.length || 0) + 1;
    const defaultDocNo = `GRN-GS-2026-${String(40 + nextGrnNum).padStart(4, '0')}`;
    const defaultCode = `COD-GRN-${7720 + nextGrnNum}`;

    let modalStagedGrnItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 15,
        poQty: 100,
        receivedQty: 100,
        deviationQty: 0,
        location: 'Main Store Rack A-2',
        batch: `BAT-${new Date().getFullYear()}-09A`,
        itemPrice: 280.00,
        baseValue: 28000.00,
        deviationAmount: 0.00,
        gstPercent: 18,
        gstTaxAmount: 5040.00
      }
    ];

    Modal.open({
      title: 'Add Goods Receipt Note (GS)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-grn-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">GRN Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Form Header Input Fields: DOC NO, CODE, DATE, SUPPLIER FIRM NAME, INVOICE NUMBER, INVOICE DATE, PO NO., FREIGHT TYPE, NARRATION, STATUS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="mgrn-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. CODE -->
              <div>
                <label for="mgrn-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-code" value="${defaultCode}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 3. DATE -->
              <div>
                <label for="mgrn-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="mgrn-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 4. SUPPLIER FIRM NAME -->
              <div>
                <label for="mgrn-supplier" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-supplier" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Devi Safety Aids & Industrial Supplies" selected>Devi Safety Aids &amp; Industrial Supplies</option>
                  <option value="Apex Engineering & Spare Parts Ltd">Apex Engineering &amp; Spare Parts Ltd</option>
                  <option value="Sri Venkateswara Packaging Ltd">Sri Venkateswara Packaging Ltd</option>
                  <option value="Delta Seals & Tapes Corp">Delta Seals &amp; Tapes Corp</option>
                  <option value="Bio-Chem Scientific Instruments India">Bio-Chem Scientific Instruments India</option>
                </select>
              </div>

              <!-- 5. INVOICE NUMBER -->
              <div>
                <label for="mgrn-inv-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mgrn-inv-no" value="INV-${Math.floor(10000 + Math.random() * 90000)}" placeholder="Vendor invoice number..." required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 6. INVOICE DATE -->
              <div>
                <label for="mgrn-inv-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="mgrn-inv-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 7. PO NO. -->
              <div>
                <label for="mgrn-po-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO. <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-po-no" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="PO-GS-2026-0101" selected>PO-GS-2026-0101 (Nitrile Gloves)</option>
                  <option value="PO-GS-2026-0102">PO-GS-2026-0102 (Plate Freezer Gaskets)</option>
                  <option value="PO-GS-2026-0103">PO-GS-2026-0103 (QC Residual Strips)</option>
                  <option value="PO-GS-2026-0104">PO-GS-2026-0104 (Thermal Barcode Ribbons)</option>
                  <option value="PO-GS-2026-0105">PO-GS-2026-0105 (PP Strapping Rolls)</option>
                </select>
              </div>

              <!-- 8. FREIGHT TYPE -->
              <div>
                <label for="mgrn-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-freight" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Paid by Supplier" selected>Paid by Supplier</option>
                  <option value="To Pay (Consignee)">To Pay (Consignee)</option>
                  <option value="FOB Ex-Factory">FOB Ex-Factory</option>
                  <option value="CIF Visakhapatnam">CIF Visakhapatnam</option>
                </select>
              </div>

              <!-- 9. STATUS -->
              <div>
                <label for="mgrn-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS <span class="text-[#DE350B]">*</span></label>
                <select id="mgrn-status" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Inward Received" selected>Inward Received</option>
                  <option value="QC Verified">QC Verified</option>
                  <option value="Stored">Stored</option>
                  <option value="Pending Inspection">Pending Inspection</option>
                </select>
              </div>

              <!-- 10. NARRATION (Takes remaining space) -->
              <div class="sm:col-span-2 md:col-span-2 lg:col-span-3">
                <label for="mgrn-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="mgrn-narration" placeholder="Enter delivery remarks, gate pass no, challan info..." value="Inward goods intake verified against vendor invoice and delivery challan" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details</h4>
              </div>
              <span id="modal-grn-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedGrnItems.length} Item(s) in GRN
              </span>
            </div>

            <!-- Item Input Grid Card (4-Column Layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- Row 1 -->
                <!-- 1. Item (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="mgrn-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mgrn-item-name" placeholder="Item name or code..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM (Col 3) -->
                <div>
                  <label for="mgrn-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM</label>
                  <select id="mgrn-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                    <option value="Bags">Bags</option>
                  </select>
                </div>

                <!-- 3. Available Qty (Col 4) -->
                <div>
                  <label for="mgrn-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="mgrn-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. PO Qty (Col 1) -->
                <div>
                  <label for="mgrn-po-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mgrn-po-qty" value="100" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Received Qty (Col 2) -->
                <div>
                  <label for="mgrn-rcv-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECEIVED QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mgrn-rcv-qty" value="100" min="0" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Deviation Qty (Col 3, Auto calculated) -->
                <div>
                  <label for="mgrn-dev-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEVIATION QTY</label>
                  <input type="number" id="mgrn-dev-qty" value="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- 7. Location (Col 4) -->
                <div>
                  <label for="mgrn-location" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
                  <select id="mgrn-location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Main Store Rack A-2" selected>Main Store Rack A-2</option>
                    <option value="Main Store Rack B-1">Main Store Rack B-1</option>
                    <option value="Coldstore Hub B">Coldstore Hub B</option>
                    <option value="Engineering Bay C">Engineering Bay C</option>
                    <option value="QC Lab Storage">QC Lab Storage</option>
                    <option value="Packaging Store Bay 1">Packaging Store Bay 1</option>
                  </select>
                </div>

                <!-- Row 3 -->
                <!-- 8. Batch (Col 1) -->
                <div>
                  <label for="mgrn-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="mgrn-batch" placeholder="Batch / Lot #" value="BAT-${new Date().getFullYear()}-09A" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Item Price (Col 2) -->
                <div>
                  <label for="mgrn-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹)</label>
                  <input type="number" id="mgrn-price" value="280.00" min="0" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 10. Base Value (Col 3) -->
                <div>
                  <label for="mgrn-base-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                  <input type="text" id="mgrn-base-val" value="28000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 11. Deviation Amount (Col 4) -->
                <div>
                  <label for="mgrn-dev-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEV AMOUNT (₹)</label>
                  <input type="text" id="mgrn-dev-amt" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#D97706] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 4 -->
                <!-- 12. GST% (Col 1) -->
                <div>
                  <label for="mgrn-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="mgrn-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 13. GST Tax Amount (Col 2) -->
                <div>
                  <label for="mgrn-gst-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST TAX AMOUNT (₹)</label>
                  <input type="text" id="mgrn-gst-amt" value="5040.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 14. Action Button (Col 3 - directly after GST Tax Amount) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-grn-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged GRN Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">PO Qty</th>
                    <th class="py-2.5 px-3 text-right">Received Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Dev Amt</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">GST Tax</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-grn-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Goods Receipt Note',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#mgrn-docno')?.value?.trim();
            const code = modalRoot.querySelector('#mgrn-code')?.value?.trim();
            const date = modalRoot.querySelector('#mgrn-date')?.value;
            const supplier = modalRoot.querySelector('#mgrn-supplier')?.value;
            const invoiceNumber = modalRoot.querySelector('#mgrn-inv-no')?.value?.trim();
            const invoiceDate = modalRoot.querySelector('#mgrn-inv-date')?.value;
            const poNo = modalRoot.querySelector('#mgrn-po-no')?.value;
            const freightType = modalRoot.querySelector('#mgrn-freight')?.value;
            const narration = modalRoot.querySelector('#mgrn-narration')?.value?.trim();
            const status = modalRoot.querySelector('#mgrn-status')?.value;

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              modalRoot.querySelector('#mgrn-docno')?.focus();
              return;
            }
            if (!invoiceNumber) {
              Toast.show('Please provide Invoice Number.', 'warning');
              modalRoot.querySelector('#mgrn-inv-no')?.focus();
              return;
            }
            if (modalStagedGrnItems.length === 0) {
              Toast.show('Please add at least one item to the Goods Receipt Note.', 'warning');
              return;
            }

            // Confirmation Popup Modal
            Modal.confirm({
              title: 'Confirm Save Goods Receipt Note',
              message: `Are you sure you want to save Goods Receipt Note <strong>${docNo}</strong> from <strong>${supplier}</strong> (PO: ${poNo}, Invoice: ${invoiceNumber}) with <strong>${modalStagedGrnItems.length} item(s)</strong>?`,
              confirmText: 'Save GRN',
              onConfirm: () => {
                const newGrn = {
                  id: (this.state.grnList?.length || 0) + 1,
                  docNo,
                  code,
                  date,
                  supplier,
                  invoiceNumber,
                  invoiceDate,
                  poNo,
                  freightType,
                  narration,
                  status,
                  items: [...modalStagedGrnItems]
                };

                this.state.grnList.unshift(newGrn);
                Modal.close();
                Toast.show(`Goods Receipt Note ${docNo} saved successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Live Calculation Logic for Item Details
    const recalcGrnItemFields = () => {
      const poQty = parseInt(modalRoot.querySelector('#mgrn-po-qty')?.value, 10) || 0;
      const rcvQty = parseInt(modalRoot.querySelector('#mgrn-rcv-qty')?.value, 10) || 0;
      const price = parseFloat(modalRoot.querySelector('#mgrn-price')?.value) || 0;
      const gstPct = parseFloat(modalRoot.querySelector('#mgrn-gst-pct')?.value) || 0;

      const devQty = rcvQty - poQty;
      const baseValue = rcvQty * price;
      const devAmt = devQty * price;
      const gstTax = baseValue * (gstPct / 100);

      const devQtyEl = modalRoot.querySelector('#mgrn-dev-qty');
      const baseValEl = modalRoot.querySelector('#mgrn-base-val');
      const devAmtEl = modalRoot.querySelector('#mgrn-dev-amt');
      const gstAmtEl = modalRoot.querySelector('#mgrn-gst-amt');

      if (devQtyEl) {
        devQtyEl.value = devQty;
        if (devQty < 0) {
          devQtyEl.className = 'w-full text-xs px-2.5 py-1.5 bg-[#FFEBE6] border border-[#FFBDAD] rounded font-mono font-bold text-[#DE350B] shadow-2xs cursor-not-allowed';
        } else {
          devQtyEl.className = 'w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed';
        }
      }
      if (baseValEl) baseValEl.value = baseValue.toFixed(2);
      if (devAmtEl) {
        devAmtEl.value = devAmt.toFixed(2);
        devAmtEl.className = devAmt < 0
          ? 'w-full text-xs px-2.5 py-1.5 bg-[#FFEBE6] border border-[#FFBDAD] rounded font-mono font-bold text-[#DE350B] shadow-2xs cursor-not-allowed'
          : 'w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed';
      }
      if (gstAmtEl) gstAmtEl.value = gstTax.toFixed(2);
    };

    ['#mgrn-po-qty', '#mgrn-rcv-qty', '#mgrn-price', '#mgrn-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcGrnItemFields);
      modalRoot.querySelector(sel)?.addEventListener('change', recalcGrnItemFields);
    });

    // Render Staged Items in Modal
    const renderModalStagedGrnItems = () => {
      const tbody = modalRoot.querySelector('#modal-grn-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-grn-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedGrnItems.length} Item(s) in GRN`;

      if (modalStagedGrnItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="13" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged in this Goods Receipt Note yet. Fill fields above and click "+ Add Item to GRN".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedGrnItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.poQty}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.receivedQty}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${it.deviationQty < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">${it.deviationQty}</td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.location}</td>
          <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-semibold ${it.deviationAmount < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">₹${Number(it.deviationAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#0284C7]">₹${Number(it.gstTaxAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-grn-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-grn-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedGrnItems.splice(rIdx, 1);
          renderModalStagedGrnItems();
        });
      });
    };

    renderModalStagedGrnItems();

    // Add Item click handler
    modalRoot.querySelector('#modal-grn-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#mgrn-item-name')?.value?.trim();
      const uom = modalRoot.querySelector('#mgrn-item-uom')?.value || 'Nos';
      const availableQty = parseInt(modalRoot.querySelector('#mgrn-avail-qty')?.value, 10) || 0;
      const poQty = parseInt(modalRoot.querySelector('#mgrn-po-qty')?.value, 10) || 0;
      const receivedQty = parseInt(modalRoot.querySelector('#mgrn-rcv-qty')?.value, 10) || 0;
      const deviationQty = receivedQty - poQty;
      const location = modalRoot.querySelector('#mgrn-location')?.value || 'Main Store Rack A-2';
      const batch = modalRoot.querySelector('#mgrn-batch')?.value?.trim() || `BAT-${new Date().getFullYear()}-01`;
      const itemPrice = parseFloat(modalRoot.querySelector('#mgrn-price')?.value) || 0;
      const baseValue = receivedQty * itemPrice;
      const deviationAmount = deviationQty * itemPrice;
      const gstPercent = parseFloat(modalRoot.querySelector('#mgrn-gst-pct')?.value) || 0;
      const gstTaxAmount = baseValue * (gstPercent / 100);

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#mgrn-item-name')?.focus();
        return;
      }
      if (poQty <= 0) {
        Toast.show('PO Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#mgrn-po-qty')?.focus();
        return;
      }

      modalStagedGrnItems.push({
        item,
        uom,
        availableQty,
        poQty,
        receivedQty,
        deviationQty,
        location,
        batch,
        itemPrice,
        baseValue,
        deviationAmount,
        gstPercent,
        gstTaxAmount
      });

      renderModalStagedGrnItems();
      Toast.show(`Item "${item}" added to GRN.`, 'info');
    });
  },

  // 1e. GOODS RECEIPT NOTE (GS) DETAILS MODAL POPUP
  showGrnDetailModal(row) {
    if (!row) return;

    const totalBase = (row.items || []).reduce((acc, it) => acc + (it.baseValue || 0), 0);
    const totalTax = (row.items || []).reduce((acc, it) => acc + (it.gstTaxAmount || 0), 0);
    const totalDev = (row.items || []).reduce((acc, it) => acc + (it.deviationAmount || 0), 0);
    const totalQty = (row.items || []).reduce((acc, it) => acc + (it.receivedQty || 0), 0);

    Modal.open({
      title: `Goods Receipt Note Details: ${row.docNo} (${row.code})`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Information Overview -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
              <span class="font-mono font-bold text-sm text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">CODE</span>
              <span class="font-mono font-semibold text-xs text-[#172B4D]">${row.code}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">STATUS</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span>${row.status || 'Received'}
              </span>
            </div>
          </div>

          <!-- Vendor & Invoice Overview -->
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-white border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">VENDOR</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.supplier}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">INVOICE NO / DATE</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.invoiceNumber || '-'}</span>
              <span class="block text-[10px] text-[#5E6C84] font-mono">${row.invoiceDate || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">PO NO.</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.poNo || '-'}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">FREIGHT TYPE</span>
              <span class="text-xs text-[#5E6C84]">${row.freightType || '-'}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-3 bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl shadow-2xs">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DELIVERY NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <!-- Work Flow Item Details Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Item Details (${row.items?.length || 0})
              </h4>
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-semibold text-[#172B4D]">Total Rcv Qty: <strong class="text-[#00875A]">${totalQty}</strong></span>
                <span class="font-mono text-xs font-bold text-[#00A4B7]">Total Value: ₹${Number(totalBase + totalTax).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3 text-right">PO Qty</th>
                    <th class="py-2.5 px-3 text-right">Received Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Dev Amt</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">GST Tax</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.poQty}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${it.receivedQty}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold ${it.deviationQty < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">${it.deviationQty}</td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.location}</td>
                      <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-semibold ${it.deviationAmount < 0 ? 'text-[#DE350B]' : 'text-[#00875A]'}">₹${Number(it.deviationAmount).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#0284C7]">₹${Number(it.gstTaxAmount).toFixed(2)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print GRN',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Toast.show(`Printing Goods Receipt Note ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // 1f. EDIT GOODS RECEIPT NOTE (GS) MODAL POPUP
  showEditGrnModal(row, onSuccess) {
    Modal.open({
      title: `Edit Goods Receipt Note: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-grn" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">GRN Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CODE <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="code" value="${row.code}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUPPLIER FIRM NAME <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="supplier" value="${row.supplier}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO NO. <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="poNo" value="${row.poNo || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B]">*</span></label>
              <input type="text" name="invoiceNumber" value="${row.invoiceNumber || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="invoiceDate" value="${row.invoiceDate || row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
              <select name="status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Inward Received" ${row.status === 'Inward Received' ? 'selected' : ''}>Inward Received</option>
                <option value="QC Verified" ${row.status === 'QC Verified' ? 'selected' : ''}>QC Verified</option>
                <option value="Stored" ${row.status === 'Stored' ? 'selected' : ''}>Stored</option>
                <option value="Pending Inspection" ${row.status === 'Pending Inspection' ? 'selected' : ''}>Pending Inspection</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
            <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update GRN',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-grn');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Goods Receipt Note',
              message: `Are you sure you want to update Goods Receipt Note <strong>${row.docNo}</strong>?`,
              confirmText: 'Update GRN',
              onConfirm: () => {
                row.code = fd.get('code');
                row.date = fd.get('date');
                row.supplier = fd.get('supplier');
                row.poNo = fd.get('poNo');
                row.invoiceNumber = fd.get('invoiceNumber');
                row.invoiceDate = fd.get('invoiceDate');
                row.status = fd.get('status');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Goods Receipt Note ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // 1d. GENERAL STORE &rarr; MATERIAL ISSUE (GS)
  // Form Input Fields: DOC NO, DATE, LOCATION, DEPARTMENT, NARRATION
  // Item Details Fields: Item, UoM, Available Qty, Item Price, Batch, Quantity, Base Value, GST%, Invoice Amount, Purpose, Attachment, Remarks, Action
  // Search & Filter, Data Table (S No, Date, Actions), Modal Popups & Confirmations
  // =========================================================================
  renderGeneralStoreMaterialIssue(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Material Issue (GS)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="gs-issue-add-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Material Issue</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="issue-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="issue-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="issue-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="issue-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. Search Query -->
          <div>
            <label for="issue-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="issue-flt-search" placeholder="Doc No / Item / Narration..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. Department -->
          <div>
            <label for="issue-flt-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="issue-flt-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Departments</option>
              <option value="Processing Unit-5">Processing Unit-5</option>
              <option value="Coldstore Hub">Coldstore Hub</option>
              <option value="Engineering & Maintenance">Engineering &amp; Maintenance</option>
              <option value="Quality Control Lab">Quality Control Lab</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
              <option value="Administration & Safety">Administration &amp; Safety</option>
            </select>
          </div>

          <!-- 3. From Date -->
          <div>
            <label for="issue-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="issue-flt-from" value="2026-10-01" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- 4. To Date -->
          <div>
            <label for="issue-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <div class="erp-date-wrapper">
              <input type="date" id="issue-flt-to" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
            </div>
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="issue-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Material Issue Records Table: S No, Date, Actions (plus Doc No, Dept, Location, Amount) -->
      <div id="gs-material-issue-table-container"></div>
    `;

    // Click handler for Add Button
    container.querySelector('#gs-issue-add-btn')?.addEventListener('click', () => {
      this.showAddMaterialIssueModal(() => {
        renderTable(this.state.materialIssueList);
      });
    });

    // Render Material Issue DataTable
    const renderTable = (data) => {
      new DataTable({
        containerId: 'gs-material-issue-table-container',
        tableTitle: `Material Issue Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showMaterialIssueDetailModal(row);
        },
        columns: [
          // 1. S No (Clickable)
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none" title="Click to view Material Issue details">${idx + 1}</span>
            `
          },
          // 2. Doc No
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap" title="Click to view details">${v}</span>`
          },
          // 3. Date
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          // 4. Department
          {
            field: 'department',
            header: 'Department',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          // 5. Location
          {
            field: 'location',
            header: 'Location',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          // 6. Items Issued
          {
            field: 'items',
            header: 'Items',
            sortable: false,
            render: (v, r) => {
              const count = r.items?.length || 0;
              return `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] whitespace-nowrap">${count} Item(s)</span>`;
            }
          },
          // 7. Total Value
          {
            field: 'totalValue',
            header: 'Total Value',
            sortable: true,
            render: (v, r) => {
              const total = (r.items || []).reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);
              return `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>`;
            }
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View Issue Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showMaterialIssueDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Material Issue',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditMaterialIssueModal(row, () => {
                renderTable(this.state.materialIssueList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Material Issue',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Material Issue',
                message: `Are you sure you want to delete Material Issue <strong>${row.docNo}</strong> for <strong>${row.department}</strong>? This action cannot be undone.`,
                confirmText: 'Delete Issue',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.materialIssueList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.materialIssueList.splice(idx, 1);
                    renderTable(this.state.materialIssueList);
                    Toast.show(`Material Issue ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.materialIssueList);

    // Search & Filter Handlers
    container.querySelector('#issue-flt-search-btn')?.addEventListener('click', () => {
      const q = container.querySelector('#issue-flt-search')?.value?.trim().toLowerCase();
      const dept = container.querySelector('#issue-flt-dept')?.value;
      const fromVal = container.querySelector('#issue-flt-from')?.value;
      const toVal = container.querySelector('#issue-flt-to')?.value;

      const filtered = this.state.materialIssueList.filter(it => {
        if (q) {
          const matchDoc = it.docNo?.toLowerCase().includes(q);
          const matchNarr = it.narration?.toLowerCase().includes(q);
          const matchItem = (it.items || []).some(x => x.item?.toLowerCase().includes(q));
          if (!matchDoc && !matchNarr && !matchItem) return false;
        }
        if (dept && dept !== 'ALL' && it.department !== dept) return false;
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching Material Issue(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#issue-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#issue-flt-search').value = '';
      container.querySelector('#issue-flt-dept').value = 'ALL';
      container.querySelector('#issue-flt-from').value = '2026-10-01';
      container.querySelector('#issue-flt-to').value = todayStr;
      renderTable(this.state.materialIssueList);
      Toast.show('Material Issue filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#issue-flt-body');
    const toggleIcon = container.querySelector('#issue-flt-toggle-icon');
    container.querySelector('#issue-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // 1e. ADD MATERIAL ISSUE (GS) MODAL POPUP
  showAddMaterialIssueModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextNum = (this.state.materialIssueList?.length || 0) + 1;
    const defaultDocNo = `ISS-GS-2026-${String(30 + nextNum).padStart(4, '0')}`;

    let modalStagedIssueItems = [
      {
        item: 'Nitrile Food-Grade Gloves (Blue, L)',
        uom: 'Box',
        availableQty: 15,
        itemPrice: 280.00,
        batch: `BAT-${new Date().getFullYear()}-09A`,
        quantity: 50,
        baseValue: 14000.00,
        gstPercent: 18,
        invoiceAmount: 16520.00,
        purpose: 'Shrimp peeling table crew hygiene',
        attachment: '',
        remarks: 'Shift Incharge indent'
      }
    ];

    Modal.open({
      title: 'Add Material Issue (GS)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-issue-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issue Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Form Input Fields: DOC NO, DATE, LOCATION, DEPARTMENT, NARRATION -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <!-- 1. DOC NO -->
              <div>
                <label for="missue-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="missue-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="missue-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <div class="erp-date-wrapper">
                  <input type="date" id="missue-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>
              </div>

              <!-- 3. LOCATION -->
              <div>
                <label for="missue-loc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
                <select id="missue-loc" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Main Store Rack A-2" selected>Main Store Rack A-2</option>
                  <option value="Main Store Rack B-1">Main Store Rack B-1</option>
                  <option value="Coldstore Hub B">Coldstore Hub B</option>
                  <option value="Engineering Bay C">Engineering Bay C</option>
                  <option value="QC Lab Storage">QC Lab Storage</option>
                  <option value="Packaging Store Bay 1">Packaging Store Bay 1</option>
                </select>
              </div>

              <!-- 4. DEPARTMENT -->
              <div>
                <label for="missue-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
                <select id="missue-dept" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Processing Unit-5" selected>Processing Unit-5</option>
                  <option value="Coldstore Hub">Coldstore Hub</option>
                  <option value="Engineering & Maintenance">Engineering &amp; Maintenance</option>
                  <option value="Quality Control Lab">Quality Control Lab</option>
                  <option value="Pre-Processing Unit">Pre-Processing Unit</option>
                  <option value="Administration & Safety">Administration &amp; Safety</option>
                </select>
              </div>

              <!-- 5. NARRATION (Takes full 4 columns) -->
              <div class="sm:col-span-2 md:col-span-4">
                <label for="missue-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="missue-narration" placeholder="Enter material issue purpose / requisition notes..." value="Store material consumption issue against approved departmental indent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details</h4>
              </div>
              <span id="modal-issue-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedIssueItems.length} Item(s) in Issue
              </span>
            </div>

            <!-- Item Input Grid Card (4-Column Layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- Row 1 -->
                <!-- 1. Item (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-item-name" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="missue-item-name" placeholder="Item name or specification..." value="Nitrile Food-Grade Gloves (Blue, L)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. UoM (Col 3) -->
                <div>
                  <label for="missue-item-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UoM <span class="text-[#DE350B]">*</span></label>
                  <select id="missue-item-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Box" selected>Box</option>
                    <option value="Nos">Nos</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Sets">Sets</option>
                    <option value="Kits">Kits</option>
                    <option value="Pairs">Pairs</option>
                    <option value="Kg">Kg</option>
                    <option value="Ltr">Ltr</option>
                    <option value="Bags">Bags</option>
                  </select>
                </div>

                <!-- 3. Available Qty (Col 4) -->
                <div>
                  <label for="missue-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="missue-avail-qty" value="15" min="0" class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" readonly />
                </div>

                <!-- Row 2 -->
                <!-- 4. Batch (Col 1) -->
                <div>
                  <label for="missue-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH <span class="text-[#DE350B]">*</span></label>
                  <input type="text" id="missue-batch" placeholder="Batch / Lot #" value="BAT-${new Date().getFullYear()}-09A" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 5. Quantity (Col 2) -->
                <div>
                  <label for="missue-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="missue-qty" value="50" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. Item Price (Col 3) -->
                <div>
                  <label for="missue-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹)</label>
                  <input type="number" id="missue-price" value="280.00" min="0" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 7. Base Value (Col 4, Auto calculated: Quantity * Price) -->
                <div>
                  <label for="missue-base-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                  <input type="text" id="missue-base-val" value="14000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- Row 3 -->
                <!-- 8. GST% (Col 1) -->
                <div>
                  <label for="missue-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="missue-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18" selected>18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 9. Invoice Amount (Col 2, Auto calculated: Base Value + Tax) -->
                <div>
                  <label for="missue-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMOUNT (₹)</label>
                  <input type="text" id="missue-inv-amt" value="16520.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. Purpose (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="missue-purpose" placeholder="Operational purpose..." value="Shrimp peeling table crew hygiene" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- Row 4 -->
                <!-- 11. Attachment (Col 1) -->
                <div>
                  <label for="missue-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="missue-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 12. Remarks (Span 2) -->
                <div class="sm:col-span-2 md:col-span-2">
                  <label for="missue-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="missue-remarks" placeholder="Optional notes / issue remarks..." value="Shift Incharge indent" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 13. Action: Add Item Button (Col 4) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-issue-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Material Issue Items Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Quantity</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amount</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-issue-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Material Issue',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#missue-docno')?.value?.trim();
            const date = modalRoot.querySelector('#missue-date')?.value;
            const location = modalRoot.querySelector('#missue-loc')?.value;
            const department = modalRoot.querySelector('#missue-dept')?.value;
            const narration = modalRoot.querySelector('#missue-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('Please enter a valid DOC NO.', 'warning');
              modalRoot.querySelector('#missue-docno')?.focus();
              return;
            }
            if (modalStagedIssueItems.length === 0) {
              Toast.show('Please add at least one item to the Material Issue.', 'warning');
              return;
            }

            // Confirmation Modal Popup
            Modal.confirm({
              title: 'Confirm Save Material Issue',
              message: `Are you sure you want to save Material Issue <strong>${docNo}</strong> for <strong>${department}</strong> (${location}) with <strong>${modalStagedIssueItems.length} item(s)</strong>?`,
              confirmText: 'Save Material Issue',
              onConfirm: () => {
                const newIssue = {
                  id: (this.state.materialIssueList?.length || 0) + 1,
                  docNo,
                  date,
                  location,
                  department,
                  narration,
                  items: [...modalStagedIssueItems]
                };

                this.state.materialIssueList.unshift(newIssue);
                Modal.close();
                Toast.show(`Material Issue ${docNo} saved successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Calculation logic
    const recalcIssueItemInputs = () => {
      const qty = parseInt(modalRoot.querySelector('#missue-qty')?.value, 10) || 0;
      const price = parseFloat(modalRoot.querySelector('#missue-price')?.value) || 0;
      const gstPct = parseFloat(modalRoot.querySelector('#missue-gst-pct')?.value) || 0;

      const baseVal = qty * price;
      const invAmt = baseVal + (baseVal * (gstPct / 100));

      const baseValEl = modalRoot.querySelector('#missue-base-val');
      const invAmtEl = modalRoot.querySelector('#missue-inv-amt');

      if (baseValEl) baseValEl.value = baseVal.toFixed(2);
      if (invAmtEl) invAmtEl.value = invAmt.toFixed(2);
    };

    ['#missue-qty', '#missue-price', '#missue-gst-pct'].forEach(sel => {
      modalRoot.querySelector(sel)?.addEventListener('input', recalcIssueItemInputs);
      modalRoot.querySelector(sel)?.addEventListener('change', recalcIssueItemInputs);
    });

    // Render Staged Items in Modal
    const renderModalStagedIssueItems = () => {
      const tbody = modalRoot.querySelector('#modal-issue-staged-tbody');
      const countBadge = modalRoot.querySelector('#modal-issue-items-count');
      if (!tbody) return;

      if (countBadge) countBadge.textContent = `${modalStagedIssueItems.length} Item(s) in Issue`;

      if (modalStagedIssueItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="12" class="text-center py-4 text-xs text-[#94A3B8] italic">No items staged yet. Fill fields above and click "Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedIssueItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
          <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.purpose || '-'}</td>
          <td class="py-2.5 px-3">
            ${it.attachment ? `
              <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                ${it.attachment}
              </span>
            ` : '<span class="text-[#94A3B8] italic">None</span>'}
          </td>
          <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.remarks || '-'}</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-issue-remove-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-issue-remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedIssueItems.splice(rIdx, 1);
          renderModalStagedIssueItems();
        });
      });
    };

    renderModalStagedIssueItems();

    // Add item click handler
    modalRoot.querySelector('#modal-issue-btn-add-item')?.addEventListener('click', () => {
      const item = modalRoot.querySelector('#missue-item-name')?.value?.trim();
      const uom = modalRoot.querySelector('#missue-item-uom')?.value || 'Nos';
      const availableQty = parseInt(modalRoot.querySelector('#missue-avail-qty')?.value, 10) || 0;
      const batch = modalRoot.querySelector('#missue-batch')?.value?.trim() || `BAT-${new Date().getFullYear()}-01`;
      const quantity = parseInt(modalRoot.querySelector('#missue-qty')?.value, 10) || 0;
      const itemPrice = parseFloat(modalRoot.querySelector('#missue-price')?.value) || 0;
      const baseValue = quantity * itemPrice;
      const gstPercent = parseFloat(modalRoot.querySelector('#missue-gst-pct')?.value) || 0;
      const invoiceAmount = baseValue + (baseValue * (gstPercent / 100));
      const purpose = modalRoot.querySelector('#missue-purpose')?.value?.trim() || '';
      const attachInput = modalRoot.querySelector('#missue-attach');
      const attachment = attachInput?.files && attachInput.files.length > 0 ? attachInput.files[0].name : '';
      const remarks = modalRoot.querySelector('#missue-remarks')?.value?.trim() || '';

      if (!item) {
        Toast.show('Please provide Item name before adding.', 'warning');
        modalRoot.querySelector('#missue-item-name')?.focus();
        return;
      }
      if (quantity <= 0) {
        Toast.show('Issue Quantity must be greater than zero.', 'warning');
        modalRoot.querySelector('#missue-qty')?.focus();
        return;
      }

      modalStagedIssueItems.push({
        item,
        uom,
        availableQty,
        itemPrice,
        batch,
        quantity,
        baseValue,
        gstPercent,
        invoiceAmount,
        purpose,
        attachment,
        remarks
      });

      renderModalStagedIssueItems();
      Toast.show(`Item "${item}" added to Material Issue.`, 'info');
    });
  },

  // 1f. MATERIAL ISSUE (GS) DETAILS MODAL POPUP
  showMaterialIssueDetailModal(row) {
    if (!row) return;

    const totalBase = (row.items || []).reduce((acc, it) => acc + (it.baseValue || 0), 0);
    const totalInv = (row.items || []).reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);
    const totalQty = (row.items || []).reduce((acc, it) => acc + (it.quantity || 0), 0);

    Modal.open({
      title: `Material Issue Details: ${row.docNo}`,
      size: 'full',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Overview Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl shadow-2xs">
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DOC NO</span>
              <span class="font-mono font-bold text-sm text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">LOCATION</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.location}</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">DEPARTMENT</span>
              <span class="font-semibold text-xs text-[#00A4B7]">${row.department}</span>
            </div>
          </div>

          ${row.narration ? `
            <div class="p-3 bg-white border border-[#DFE1E6] rounded-xl shadow-2xs">
              <span class="block text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider mb-0.5">NARRATION</span>
              <p class="text-xs text-[#172B4D]">${row.narration}</p>
            </div>
          ` : ''}

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider flex items-center gap-1.5">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                Issued Items (${row.items?.length || 0})
              </h4>
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-semibold text-[#172B4D]">Total Issued Qty: <strong class="text-[#00875A]">${totalQty}</strong></span>
                <span class="font-mono text-xs font-bold text-[#00A4B7]">Total Value: ₹${Number(totalInv).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div class="overflow-x-auto border border-[#DFE1E6] rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UoM</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">Quantity</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST%</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amount</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3">Attachment</th>
                    <th class="py-2.5 px-3">Remarks</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${(row.items || []).map(it => `
                    <tr class="hover:bg-[#F8FAFC] transition-colors">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2.5 px-3 font-mono text-[#5E6C84]">${it.uom}</td>
                      <td class="py-2.5 px-3 font-mono text-xs font-semibold text-[#172B4D]">${it.batch}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${it.quantity}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84]">₹${Number(it.itemPrice).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">₹${Number(it.baseValue).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">${it.gstPercent}%</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.purpose || '-'}</td>
                      <td class="py-2.5 px-3">
                        ${it.attachment ? `
                          <span class="inline-flex items-center gap-1 text-[11px] font-mono text-[#00A4B7] bg-[#E0F2FE] px-2 py-0.5 rounded border border-[#BAE6FD]">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                            ${it.attachment}
                          </span>
                        ` : '<span class="text-[#94A3B8] italic">None</span>'}
                      </td>
                      <td class="py-2.5 px-3 text-xs text-[#5E6C84]">${it.remarks || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Print Issue Slip',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            Toast.show(`Printing Material Issue Slip ${row.docNo}...`, 'success');
          }
        }
      ]
    });
  },

  // 1g. EDIT MATERIAL ISSUE (GS) MODAL POPUP
  showEditMaterialIssueModal(row, onSuccess) {
    Modal.open({
      title: `Edit Material Issue: ${row.docNo}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-issue" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issue Header Information</h4>
            </div>
            <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" name="docNo" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed">
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
              <div class="erp-date-wrapper">
                <input type="date" name="date" value="${row.date}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()">
              </div>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B]">*</span></label>
              <select name="location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Main Store Rack A-2" ${row.location === 'Main Store Rack A-2' ? 'selected' : ''}>Main Store Rack A-2</option>
                <option value="Main Store Rack B-1" ${row.location === 'Main Store Rack B-1' ? 'selected' : ''}>Main Store Rack B-1</option>
                <option value="Coldstore Hub B" ${row.location === 'Coldstore Hub B' ? 'selected' : ''}>Coldstore Hub B</option>
                <option value="Engineering Bay C" ${row.location === 'Engineering Bay C' ? 'selected' : ''}>Engineering Bay C</option>
                <option value="QC Lab Storage" ${row.location === 'QC Lab Storage' ? 'selected' : ''}>QC Lab Storage</option>
                <option value="Packaging Store Bay 1" ${row.location === 'Packaging Store Bay 1' ? 'selected' : ''}>Packaging Store Bay 1</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B]">*</span></label>
              <select name="department" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                <option value="Processing Unit-5" ${row.department === 'Processing Unit-5' ? 'selected' : ''}>Processing Unit-5</option>
                <option value="Coldstore Hub" ${row.department === 'Coldstore Hub' ? 'selected' : ''}>Coldstore Hub</option>
                <option value="Engineering & Maintenance" ${row.department === 'Engineering & Maintenance' ? 'selected' : ''}>Engineering &amp; Maintenance</option>
                <option value="Quality Control Lab" ${row.department === 'Quality Control Lab' ? 'selected' : ''}>Quality Control Lab</option>
                <option value="Pre-Processing Unit" ${row.department === 'Pre-Processing Unit' ? 'selected' : ''}>Pre-Processing Unit</option>
                <option value="Administration & Safety" ${row.department === 'Administration & Safety' ? 'selected' : ''}>Administration &amp; Safety</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
              <textarea name="narration" rows="2" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">${row.narration || ''}</textarea>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: (modal) => modal.close()
        },
        {
          label: 'Update Material Issue',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: (modal) => {
            const form = document.getElementById('form-edit-issue');
            if (!form || !form.checkValidity()) {
              if (form) form.reportValidity();
              return;
            }
            const fd = new FormData(form);

            Modal.confirm({
              title: 'Confirm Update Material Issue',
              message: `Are you sure you want to update Material Issue <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Issue',
              onConfirm: () => {
                row.date = fd.get('date');
                row.location = fd.get('location');
                row.department = fd.get('department');
                row.narration = fd.get('narration');

                modal.close();
                Toast.show(`Material Issue ${row.docNo} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // =========================================================================
  // 2. PACKING MATERIAL (PM) MODULE VIEWS
  // Tabs: Proforma Invoice, Purchase Orders, Goods Receipt Note, Material Issue
  // =========================================================================

  // 2a. PROFORMA INVOICE (PM)
  renderPackingMaterialProformaInvoice(container) {
    const todayStr = new Date().toISOString().slice(0, 10);
    container.innerHTML = `
      <div class="flex items-center justify-between pb-1 mb-2">
        <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Proforma Invoice (PM)</h1>
        <button type="button" id="btn-create-pm-pi" class="btn-primary border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>Add PROFORMA INVOICE</span>
        </button>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="pm-pi-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="pm-pi-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="pm-pi-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="pm-pi-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. DOC NO -->
          <div>
            <label for="pm-pi-flt-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
            <input type="text" id="pm-pi-flt-doc" placeholder="Search by Doc No..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. DATE -->
          <div>
            <label for="pm-pi-flt-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
            <input type="date" id="pm-pi-flt-date" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 3. CONSIGNEE -->
          <div>
            <label for="pm-pi-flt-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE / BUYER</label>
            <input type="text" id="pm-pi-flt-consignee" placeholder="Search consignee..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 4. PRO NO / BUYER ORDER NO -->
          <div>
            <label for="pm-pi-flt-pro" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO NO / BUYER ORDER NO</label>
            <input type="text" id="pm-pi-flt-pro" placeholder="Pro No or Buyer Order..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Second Line: Search Button (Left side) -->
          <div class="col-span-1 sm:col-span-2 md:col-span-4 flex justify-start pt-1">
            <button type="button" id="pm-pi-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px]">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card (S No, Doc No, Date, Actions) -->
      <div id="pm-pi-table-container"></div>
    `;

    // Add Proforma Invoice Button click
    container.querySelector('#btn-create-pm-pi')?.addEventListener('click', () => {
      this.showAddPmPiModal(() => renderTable(this.state.pmProformaList));
    });

    // Render Table: S No, Doc No, Date, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'pm-pi-table-container',
        tableTitle: `Proforma Invoices (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showPmPiDetailsModal(row);
        },
        columns: [
          {
            field: 'sNo',
            header: 'S No',
            sortable: false,
            render: (v, r, idx) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer select-none">
                ${String(idx + 1).padStart(2, '0')}
              </span>
            `
          },
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-bold text-xs text-[#172B4D] hover:text-[#00A4B7] cursor-pointer">${v || r.piNumber || '-'}</span>
                <span class="text-[11px] text-[#5E6C84] truncate max-w-[200px]">${r.consignee || r.supplierName || ''}</span>
              </div>
            `
          },
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: (v, r) => `<span class="font-mono text-xs text-[#172B4D]">${v || r.piDate || '-'}</span>`
          }
        ],
        actions: [
          {
            label: 'View',
            title: 'View Proforma Invoice Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showPmPiDetailsModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Proforma Invoice',
            icon: `<svg class="w-4 h-4 text-[#5E6C84] hover:text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditPmPiModal(row, () => renderTable(this.state.pmProformaList));
            }
          },
          {
            label: 'Delete',
            title: 'Delete Proforma Invoice',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Proforma Invoice',
                message: `Are you sure you want to permanently delete Proforma Invoice <strong>${row.docNo || row.piNumber}</strong>? This action cannot be undone.`,
                confirmText: 'Delete Proforma Invoice',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.pmProformaList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.pmProformaList.splice(idx, 1);
                    renderTable(this.state.pmProformaList);
                    Toast.show(`Proforma Invoice ${row.docNo || row.piNumber} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.pmProformaList);

    // Search Handler
    container.querySelector('#pm-pi-flt-search-btn')?.addEventListener('click', () => {
      const docVal = container.querySelector('#pm-pi-flt-doc')?.value?.trim().toLowerCase();
      const dateVal = container.querySelector('#pm-pi-flt-date')?.value;
      const consigneeVal = container.querySelector('#pm-pi-flt-consignee')?.value?.trim().toLowerCase();
      const proVal = container.querySelector('#pm-pi-flt-pro')?.value?.trim().toLowerCase();

      const filtered = this.state.pmProformaList.filter(it => {
        if (docVal && !((it.docNo || it.piNumber || '').toLowerCase().includes(docVal))) return false;
        if (dateVal && (it.date || it.piDate) !== dateVal) return false;
        if (consigneeVal && !((it.consignee || it.supplierName || '').toLowerCase().includes(consigneeVal))) return false;
        if (proVal) {
          const matchPro = (it.proNo || '').toLowerCase().includes(proVal);
          const matchBo = (it.buyerOrderNo || '').toLowerCase().includes(proVal);
          if (!matchPro && !matchBo) return false;
        }
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching proforma invoice(s)`, 'info');
    });

    // Reset Handler
    container.querySelector('#pm-pi-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#pm-pi-flt-doc').value = '';
      container.querySelector('#pm-pi-flt-date').value = '';
      container.querySelector('#pm-pi-flt-consignee').value = '';
      container.querySelector('#pm-pi-flt-pro').value = '';
      renderTable(this.state.pmProformaList);
      Toast.show('Filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const filterBody = container.querySelector('#pm-pi-flt-body');
    const toggleIcon = container.querySelector('#pm-pi-flt-toggle-icon');
    container.querySelector('#pm-pi-flt-toggle-btn')?.addEventListener('click', () => {
      if (filterBody) {
        filterBody.classList.toggle('hidden');
        if (toggleIcon) {
          toggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // Modal: ADD PROFORMA INVOICE
  showAddPmPiModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextNum = (this.state.pmProformaList?.length || 0) + 1;
    const defaultDocNo = `PI-PM-2026-${String(40 + nextNum).padStart(4, '0')}`;

    let modalStagedItems = [
      {
        variety: 'Vannamei White Shrimp',
        grade: '31/40',
        packingStyle: '10 X 1 KG Printed Pouch',
        processType: 'PDTO (Peeled Deveined Tail-On)',
        brand: 'Devi Gold',
        bapMaster: '4-Star BAP Certified',
        noOfCartons: 1500,
        totalNetWeight: 15000
      }
    ];

    Modal.open({
      title: 'Add PROFORMA INVOICE',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-pm-pi-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Proforma Invoice Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Header Form Input Fields (4 columns responsive layout) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. DOC NO -->
              <div>
                <label for="mpi-docno" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mpi-docno" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="mpi-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="mpi-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 3. CURRENCY -->
              <div>
                <label for="mpi-currency" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CURRENCY <span class="text-[#DE350B]">*</span></label>
                <select id="mpi-currency" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="USD ($)" selected>USD ($)</option>
                  <option value="EUR (€)">EUR (€)</option>
                  <option value="GBP (£)">GBP (£)</option>
                  <option value="JPY (¥)">JPY (¥)</option>
                  <option value="INR (₹)">INR (₹)</option>
                </select>
              </div>

              <!-- 4. EXCHANGE RATE -->
              <div>
                <label for="mpi-exchange-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EXCHANGE RATE</label>
                <input type="number" id="mpi-exchange-rate" value="86.50" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 5. CONSIGNEE * -->
              <div class="sm:col-span-2 md:col-span-2">
                <label for="mpi-consignee" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="mpi-consignee" placeholder="Consignee company name and address..." value="AquaStar Global Foods LLC, Seattle WA" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 6. COMPANY -->
              <div class="sm:col-span-2 md:col-span-2">
                <label for="mpi-company" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COMPANY</label>
                <input type="text" id="mpi-company" value="Devi Fisheries Limited - Plant 5" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 7. PORT OF LOADING -->
              <div>
                <label for="mpi-pol" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF LOADING</label>
                <input type="text" id="mpi-pol" value="Visakhapatnam Port (INVTZ1)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 8. NOTIFY PARTY -->
              <div>
                <label for="mpi-notify-party" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NOTIFY PARTY</label>
                <input type="text" id="mpi-notify-party" value="Apex Global Logistics Newark, NJ" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 9. BUYER ORDER NO -->
              <div>
                <label for="mpi-buyer-order" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER ORDER NO</label>
                <input type="text" id="mpi-buyer-order" value="BO-USA-2026-9921" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 10. EXPORT REFERENCE NO -->
              <div>
                <label for="mpi-export-ref" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">EXPORT REFERENCE NO</label>
                <input type="text" id="mpi-export-ref" value="EXP-REF-8841" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 11. SHIPMENT DATE -->
              <div>
                <label for="mpi-shipment-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SHIPMENT DATE</label>
                <input type="date" id="mpi-shipment-date" value="2026-11-20" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 12. COUNTRY OF FINAL DESTINATION -->
              <div>
                <label for="mpi-dest-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COUNTRY OF FINAL DESTINATION</label>
                <select id="mpi-dest-country" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="United States" selected>United States</option>
                  <option value="Japan">Japan</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <!-- 13. COUNTRY OF ORIGIN -->
              <div>
                <label for="mpi-origin-country" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">COUNTRY OF ORIGIN</label>
                <input type="text" id="mpi-origin-country" value="India" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-semibold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>

              <!-- 14. FINAL DESTINATION -->
              <div>
                <label for="mpi-final-dest" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION</label>
                <input type="text" id="mpi-final-dest" value="Los Angeles, CA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 15. PRO NO -->
              <div>
                <label for="mpi-pro-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO NO</label>
                <input type="text" id="mpi-pro-no" value="PRO-2026-0819" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 16. PURCHASE ORDER ATTACHMENT -->
              <div>
                <label for="mpi-po-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURCHASE ORDER ATTACHMENT</label>
                <input type="file" id="mpi-po-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
              </div>

              <!-- 17. PO APPROVED DATE -->
              <div>
                <label for="mpi-po-app-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PO APPROVED DATE</label>
                <input type="date" id="mpi-po-app-date" value="2026-10-25" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 18. PROCESS AND PACKED BY -->
              <div>
                <label for="mpi-proc-packed" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCESS AND PACKED BY</label>
                <input type="text" id="mpi-proc-packed" value="Devi Fisheries Ltd (Unit-5, JPT)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 19. PORT OF DISCHARGE -->
              <div>
                <label for="mpi-pod" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PORT OF DISCHARGE</label>
                <input type="text" id="mpi-pod" value="Port of Los Angeles (USLAX)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 20. IS GLAZE -->
              <div>
                <label for="mpi-is-glaze" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IS GLAZE</label>
                <select id="mpi-is-glaze" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Yes (10% Protective Water Glaze)" selected>Yes (10% Protective Water Glaze)</option>
                  <option value="Yes (15% Protective Glaze)">Yes (15% Protective Glaze)</option>
                  <option value="Yes (20% Protective Glaze)">Yes (20% Protective Glaze)</option>
                  <option value="No Glaze (Raw IQF Block)">No Glaze (Raw IQF Block)</option>
                </select>
              </div>

              <!-- 21. DELIVERY TERMS -->
              <div>
                <label for="mpi-delivery-terms" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DELIVERY TERMS</label>
                <select id="mpi-delivery-terms" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="CIF" selected>CIF (Cost, Insurance &amp; Freight)</option>
                  <option value="CFR">CFR (Cost &amp; Freight)</option>
                  <option value="FOB">FOB (Free on Board)</option>
                  <option value="DDP">DDP (Delivered Duty Paid)</option>
                  <option value="EXW">EXW (Ex Works)</option>
                </select>
              </div>

              <!-- 22. BUYER (OTHER THAN CONSIGNEE) -->
              <div>
                <label for="mpi-buyer-other" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER(OTHER THAN CONSIGNEE)</label>
                <input type="text" id="mpi-buyer-other" value="Ocean Harvest International USA" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 23. ADVANCE AMOUNT -->
              <div>
                <label for="mpi-advance-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ADVANCE AMOUNT ($)</label>
                <input type="number" id="mpi-advance-amt" value="19440.00" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 24. TERM OF DELIVERY AND PAYMENT -->
              <div class="sm:col-span-2 md:col-span-2">
                <label for="mpi-term-del-pay" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TERM OF DELIVERY AND PAYMENT</label>
                <input type="text" id="mpi-term-del-pay" value="CIF Los Angeles / 30% Advance, 70% against BL copy" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 25. AMOUNT IN WORDS -->
              <div class="sm:col-span-2 md:col-span-2">
                <label for="mpi-amt-words" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AMOUNT IN WORDS</label>
                <input type="text" id="mpi-amt-words" value="US Dollars Sixty-Four Thousand Eight Hundred Only" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 26. NARRATION (Full width) -->
              <div class="sm:col-span-2 md:col-span-4">
                <label for="mpi-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="mpi-narration" placeholder="Proforma purpose and special packaging instructions..." value="Export packing proforma allocation for seasonal Vannamei pack" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details Fields -->
          <div class="pt-2 border-t border-[#DFE1E6]">
            <div class="flex items-center justify-between pb-2 mb-3">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details Fields</h4>
              </div>
              <span id="modal-pi-items-count" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                ${modalStagedItems.length} Item(s) Added
              </span>
            </div>

            <!-- Item Input Grid Card (4 columns responsive layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. Variety * -->
                <div>
                  <label for="mpi-item-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VARIETY <span class="text-[#DE350B]">*</span></label>
                  <select id="mpi-item-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Vannamei White Shrimp" selected>Vannamei White Shrimp</option>
                    <option value="Black Tiger Shrimp">Black Tiger Shrimp</option>
                    <option value="Sea White Shrimp">Sea White Shrimp</option>
                    <option value="Pink Brown Shrimp">Pink Brown Shrimp</option>
                    <option value="Freshwater Scampi">Freshwater Scampi</option>
                  </select>
                </div>

                <!-- 2. Grade -->
                <div>
                  <label for="mpi-item-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GRADE</label>
                  <select id="mpi-item-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="16/20">16/20</option>
                    <option value="21/25">21/25</option>
                    <option value="26/30">26/30</option>
                    <option value="31/40" selected>31/40</option>
                    <option value="41/50">41/50</option>
                    <option value="51/60">51/60</option>
                    <option value="61/70">61/70</option>
                    <option value="71/90">71/90</option>
                  </select>
                </div>

                <!-- 3. Packing Style -->
                <div>
                  <label for="mpi-item-packing-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PACKING STYLE</label>
                  <select id="mpi-item-packing-style" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="10 X 1 KG Printed Pouch" selected>10 X 1 KG Printed Pouch</option>
                    <option value="6 X 2 KG Master Carton">6 X 2 KG Master Carton</option>
                    <option value="1 X 10 KG Block IQF">1 X 10 KG Block IQF</option>
                    <option value="5 X 2 Lb Retail Zipper Bag">5 X 2 Lb Retail Zipper Bag</option>
                    <option value="10 X 2 Lb Export Master">10 X 2 Lb Export Master</option>
                  </select>
                </div>

                <!-- 4. Process Type -->
                <div>
                  <label for="mpi-item-process-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCESS TYPE</label>
                  <select id="mpi-item-process-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="PDTO (Peeled Deveined Tail-On)" selected>PDTO (Peeled Deveined Tail-On)</option>
                    <option value="HLSO (Headless Shell-On)">HLSO (Headless Shell-On)</option>
                    <option value="PD (Peeled &amp; Deveined)">PD (Peeled &amp; Deveined)</option>
                    <option value="Cooked Tail-On">Cooked Tail-On</option>
                    <option value="EZ Peel">EZ Peel</option>
                  </select>
                </div>

                <!-- 5. Brand -->
                <div>
                  <label for="mpi-item-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                  <input type="text" id="mpi-item-brand" value="Devi Gold" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 6. BAP Master -->
                <div>
                  <label for="mpi-item-bap" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BAP MASTER</label>
                  <select id="mpi-item-bap" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="4-Star BAP Certified" selected>4-Star BAP Certified</option>
                    <option value="3-Star BAP">3-Star BAP</option>
                    <option value="ASC Certified">ASC Certified</option>
                    <option value="BRCGS Grade A">BRCGS Grade A</option>
                  </select>
                </div>

                <!-- 7. No of Cartons -->
                <div>
                  <label for="mpi-item-cartons" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NO OF CARTONS <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mpi-item-cartons" value="1500" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 8. Total Net Weight(KGs) -->
                <div>
                  <label for="mpi-item-weight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TOTAL NET WEIGHT (KGS) <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="mpi-item-weight" value="15000" min="1" step="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Action Button (Placed directly after with max-width 150px) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-pi-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Items Preview Table -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Process Type</th>
                    <th class="py-2.5 px-3">Brand</th>
                    <th class="py-2.5 px-3">BAP Master</th>
                    <th class="py-2.5 px-3 text-right">No of Cartons</th>
                    <th class="py-2.5 px-3 text-right">Total Net Wt (KGs)</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="modal-pi-staged-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save PROFORMA INVOICE',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#mpi-docno')?.value?.trim();
            const date = modalRoot.querySelector('#mpi-date')?.value;
            const consignee = modalRoot.querySelector('#mpi-consignee')?.value?.trim();
            const currency = modalRoot.querySelector('#mpi-currency')?.value;
            const exchangeRate = modalRoot.querySelector('#mpi-exchange-rate')?.value;
            const company = modalRoot.querySelector('#mpi-company')?.value?.trim();
            const portOfLoading = modalRoot.querySelector('#mpi-pol')?.value?.trim();
            const notifyParty = modalRoot.querySelector('#mpi-notify-party')?.value?.trim();
            const buyerOrderNo = modalRoot.querySelector('#mpi-buyer-order')?.value?.trim();
            const exportReferenceNo = modalRoot.querySelector('#mpi-export-ref')?.value?.trim();
            const shipmentDate = modalRoot.querySelector('#mpi-shipment-date')?.value;
            const countryOfFinalDestination = modalRoot.querySelector('#mpi-dest-country')?.value;
            const countryOfOrigin = modalRoot.querySelector('#mpi-origin-country')?.value;
            const finalDestination = modalRoot.querySelector('#mpi-final-dest')?.value?.trim();
            const proNo = modalRoot.querySelector('#mpi-pro-no')?.value?.trim();
            const poApprovedDate = modalRoot.querySelector('#mpi-po-app-date')?.value;
            const processAndPackedBy = modalRoot.querySelector('#mpi-proc-packed')?.value?.trim();
            const portOfDischarge = modalRoot.querySelector('#mpi-pod')?.value?.trim();
            const isGlaze = modalRoot.querySelector('#mpi-is-glaze')?.value;
            const deliveryTerms = modalRoot.querySelector('#mpi-delivery-terms')?.value;
            const buyerOtherThanConsignee = modalRoot.querySelector('#mpi-buyer-other')?.value?.trim();
            const advanceAmount = modalRoot.querySelector('#mpi-advance-amt')?.value;
            const termOfDeliveryAndPayment = modalRoot.querySelector('#mpi-term-del-pay')?.value?.trim();
            const amountInWords = modalRoot.querySelector('#mpi-amt-words')?.value?.trim();
            const narration = modalRoot.querySelector('#mpi-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('DOC NO is required', 'error');
              modalRoot.querySelector('#mpi-docno')?.focus();
              return;
            }
            if (!consignee) {
              Toast.show('CONSIGNEE is required', 'error');
              modalRoot.querySelector('#mpi-consignee')?.focus();
              return;
            }
            if (modalStagedItems.length === 0) {
              Toast.show('Please add at least one item before saving.', 'warning');
              return;
            }

            // Custom Confirmation Popup
            Modal.confirm({
              title: 'Confirm Save PROFORMA INVOICE',
              message: `Are you sure you want to save Proforma Invoice <strong>${docNo}</strong> for <strong>${consignee}</strong> with <strong>${modalStagedItems.length} item(s)</strong>?`,
              confirmText: 'Save Proforma Invoice',
              onConfirm: () => {
                const newRecord = {
                  id: (this.state.pmProformaList?.length || 0) + 1,
                  docNo,
                  date,
                  currency,
                  exchangeRate,
                  consignee,
                  company,
                  portOfLoading,
                  notifyParty,
                  buyerOrderNo,
                  exportReferenceNo,
                  shipmentDate,
                  countryOfFinalDestination,
                  countryOfOrigin,
                  finalDestination,
                  proNo,
                  poApprovedDate,
                  processAndPackedBy,
                  portOfDischarge,
                  isGlaze,
                  deliveryTerms,
                  buyerOtherThanConsignee,
                  advanceAmount,
                  termOfDeliveryAndPayment,
                  amountInWords,
                  narration,
                  status: 'Approved',
                  items: [...modalStagedItems]
                };

                this.state.pmProformaList.unshift(newRecord);
                Modal.close();
                Toast.show(`Proforma Invoice ${docNo} created successfully!`, 'success');

                if (typeof onSuccess === 'function') {
                  onSuccess();
                }
              }
            });
          }
        }
      ]
    });

    const modalRoot = document.getElementById('erp-modal-root');
    if (!modalRoot) return;

    // Render Staged Items
    const renderModalStagedItems = () => {
      const tbody = modalRoot.querySelector('#modal-pi-staged-tbody');
      const countEl = modalRoot.querySelector('#modal-pi-items-count');
      if (countEl) countEl.textContent = `${modalStagedItems.length} Item(s) Added`;
      if (!tbody) return;

      if (modalStagedItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="9" class="py-4 text-center text-[#5E6C84]">No items added yet. Fill fields above and click "+ Add Item".</td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = modalStagedItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.variety}</td>
          <td class="py-2.5 px-3 font-mono text-[#00A4B7] font-bold">${it.grade}</td>
          <td class="py-2.5 px-3 text-[#172B4D]">${it.packingStyle}</td>
          <td class="py-2.5 px-3 text-[#5E6C84]">${it.processType}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.brand}</td>
          <td class="py-2.5 px-3 text-[11px] text-[#0284C7] font-semibold">${it.bapMaster}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(it.noOfCartons).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${Number(it.totalNetWeight).toLocaleString()} KGs</td>
          <td class="py-2.5 px-3 text-center">
            <button type="button" data-remove-idx="${idx}" class="modal-remove-item-btn w-6 h-6 rounded-full hover:bg-[#FFEBE6] text-[#DE350B] inline-flex items-center justify-center transition-colors cursor-pointer" title="Remove Item">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.modal-remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const rIdx = parseInt(btn.dataset.removeIdx, 10);
          modalStagedItems.splice(rIdx, 1);
          renderModalStagedItems();
        });
      });
    };

    renderModalStagedItems();

    // Add Item click handler
    modalRoot.querySelector('#modal-pi-btn-add-item')?.addEventListener('click', () => {
      const variety = modalRoot.querySelector('#mpi-item-variety')?.value;
      const grade = modalRoot.querySelector('#mpi-item-grade')?.value;
      const packingStyle = modalRoot.querySelector('#mpi-item-packing-style')?.value;
      const processType = modalRoot.querySelector('#mpi-item-process-type')?.value;
      const brand = modalRoot.querySelector('#mpi-item-brand')?.value?.trim() || 'Devi Gold';
      const bapMaster = modalRoot.querySelector('#mpi-item-bap')?.value;
      const noOfCartons = parseInt(modalRoot.querySelector('#mpi-item-cartons')?.value, 10) || 0;
      const totalNetWeight = parseFloat(modalRoot.querySelector('#mpi-item-weight')?.value) || 0;

      if (!variety) {
        Toast.show('Please select a Variety.', 'warning');
        return;
      }
      if (noOfCartons <= 0) {
        Toast.show('No of Cartons must be greater than 0', 'warning');
        modalRoot.querySelector('#mpi-item-cartons')?.focus();
        return;
      }
      if (totalNetWeight <= 0) {
        Toast.show('Total Net Weight must be greater than 0', 'warning');
        modalRoot.querySelector('#mpi-item-weight')?.focus();
        return;
      }

      modalStagedItems.push({
        variety,
        grade,
        packingStyle,
        processType,
        brand,
        bapMaster,
        noOfCartons,
        totalNetWeight
      });

      renderModalStagedItems();
      Toast.show(`Item added to Proforma Invoice (${modalStagedItems.length} total)`, 'success');
    });
  },

  // Modal: EDIT PROFORMA INVOICE
  showEditPmPiModal(row, onSuccess = null) {
    Modal.open({
      title: `Edit Proforma Invoice: ${row.docNo || row.piNumber}`,
      size: 'lg',
      confirmActions: false,
      content: `
        <form id="form-edit-pm-pi" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
              <input type="text" value="${row.docNo || row.piNumber}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] cursor-not-allowed" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE</label>
              <input type="date" id="edit-pm-pi-date" value="${row.date || row.piDate || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CURRENCY</label>
              <input type="text" id="edit-pm-pi-currency" value="${row.currency || 'USD ($)'}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div class="sm:col-span-2 md:col-span-3">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CONSIGNEE</label>
              <input type="text" id="edit-pm-pi-consignee" value="${row.consignee || row.supplierName || ''}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FINAL DESTINATION</label>
              <input type="text" id="edit-pm-pi-dest" value="${row.finalDestination || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO NO</label>
              <input type="text" id="edit-pm-pi-pro" value="${row.proNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div>
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BUYER ORDER NO</label>
              <input type="text" id="edit-pm-pi-order" value="${row.buyerOrderNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
            <div class="sm:col-span-2 md:col-span-3">
              <label class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
              <input type="text" id="edit-pm-pi-narration" value="${row.narration || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Update Proforma Invoice',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const date = document.getElementById('edit-pm-pi-date')?.value;
            const consignee = document.getElementById('edit-pm-pi-consignee')?.value?.trim();
            const currency = document.getElementById('edit-pm-pi-currency')?.value;
            const finalDestination = document.getElementById('edit-pm-pi-dest')?.value?.trim();
            const proNo = document.getElementById('edit-pm-pi-pro')?.value?.trim();
            const buyerOrderNo = document.getElementById('edit-pm-pi-order')?.value?.trim();
            const narration = document.getElementById('edit-pm-pi-narration')?.value?.trim();

            if (!consignee) {
              Toast.show('Consignee is required', 'error');
              return;
            }

            Modal.confirm({
              title: 'Confirm Update Proforma Invoice',
              message: `Are you sure you want to update Proforma Invoice <strong>${row.docNo || row.piNumber}</strong>?`,
              confirmText: 'Update Proforma Invoice',
              onConfirm: () => {
                row.date = date;
                row.consignee = consignee;
                row.currency = currency;
                row.finalDestination = finalDestination;
                row.proNo = proNo;
                row.buyerOrderNo = buyerOrderNo;
                row.narration = narration;

                Modal.close();
                Toast.show(`Proforma Invoice ${row.docNo || row.piNumber} updated successfully!`, 'success');
                if (typeof onSuccess === 'function') onSuccess();
              }
            });
          }
        }
      ]
    });
  },

  // Modal: VIEW DETAILS PROFORMA INVOICE
  showPmPiDetailsModal(row) {
    const items = row.items || [];
    Modal.open({
      title: `Proforma Invoice Details: ${row.docNo || row.piNumber}`,
      size: '2xl',
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Header Information Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#DFE1E6] p-3.5 rounded-xl">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo || row.piNumber || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.date || row.piDate || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">CURRENCY</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.currency || 'USD ($)'} (Ex. Rate: ${row.exchangeRate || '86.50'})</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">PRO NO / BO NO</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.proNo || '-'} / ${row.buyerOrderNo || '-'}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">CONSIGNEE</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.consignee || row.supplierName || '-'}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">COMPANY</span>
              <span class="font-medium text-xs text-[#172B4D]">${row.company || 'Devi Fisheries Limited - Plant 5'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">PORT OF LOADING</span>
              <span class="text-xs text-[#172B4D]">${row.portOfLoading || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">PORT OF DISCHARGE</span>
              <span class="text-xs text-[#172B4D]">${row.portOfDischarge || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">FINAL DESTINATION</span>
              <span class="text-xs text-[#172B4D]">${row.finalDestination || row.countryOfFinalDestination || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DELIVERY TERMS</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#E0F2FE] text-[#0284C7]">${row.deliveryTerms || 'CIF'}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">TERMS OF DELIVERY &amp; PAYMENT</span>
              <span class="text-xs text-[#172B4D]">${row.termOfDeliveryAndPayment || '-'}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">AMOUNT IN WORDS</span>
              <span class="text-xs italic text-[#172B4D]">${row.amountInWords || '-'}</span>
            </div>
            ${row.narration ? `
              <div class="col-span-2 sm:col-span-4 border-t border-[#DFE1E6] pt-2 mt-1">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">NARRATION</span>
                <span class="text-xs text-[#172B4D] font-medium">${row.narration}</span>
              </div>
            ` : ''}
          </div>

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#DFE1E6]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Item Details (${items.length})</h4>
            </div>
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Process Type</th>
                    <th class="py-2.5 px-3">Brand</th>
                    <th class="py-2.5 px-3">BAP Master</th>
                    <th class="py-2.5 px-3 text-right">No of Cartons</th>
                    <th class="py-2.5 px-3 text-right">Total Net Wt (KGs)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                  ${items.map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.variety || it.item || '-'}</td>
                      <td class="py-2.5 px-3 font-mono text-[#00A4B7] font-bold">${it.grade || '-'}</td>
                      <td class="py-2.5 px-3 text-[#172B4D]">${it.packingStyle || it.unit || '-'}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84]">${it.processType || '-'}</td>
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.brand || '-'}</td>
                      <td class="py-2.5 px-3 text-[11px] text-[#0284C7] font-semibold">${it.bapMaster || '-'}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(it.noOfCartons || it.quantity || 0).toLocaleString()}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">${Number(it.totalNetWeight || it.baseValue || 0).toLocaleString()} KGs</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });
  },

  // Backward compatibility alias for any existing router/calls
  renderPackingMaterialProforma(container) {
    this.renderPackingMaterialProformaInvoice(container);
  },

  // =========================================================================
  // 2b. PURCHASE ORDERS (PM)
  // =========================================================================
  renderPackingMaterialPurchaseOrders(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Purchase Orders (PM)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="pm-po-toggle-form-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="pm-po-toggle-text">Add Purchase Order</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="pm-po-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="pm-po-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="pm-po-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="pm-po-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. From Date -->
          <div>
            <label for="pm-po-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="pm-po-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. To Date -->
          <div>
            <label for="pm-po-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="pm-po-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 3. Status -->
          <div>
            <label for="pm-po-flt-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
            <select id="pm-po-flt-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Statuses</option>
              <option value="Approved">Approved</option>
              <option value="Draft">Draft</option>
              <option value="Issued to Vendor">Issued to Vendor</option>
              <option value="In Production">In Production</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <!-- 4. Search Button in Fourth Column -->
          <div class="flex items-end">
            <button type="button" id="pm-po-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Existing PM POs Data Table Card: S.No, Doc No, Date, Supplier, Status, Actions -->
      <div id="pm-po-table-container"></div>
    `;

    // Direct Click Handler for "Add Purchase Order" Button -> Opens Add PO Modal Popup
    container.querySelector('#pm-po-toggle-form-btn')?.addEventListener('click', () => {
      this.showAddPmPoModal(() => {
        renderTable(this.state.pmPurchaseOrderList);
      });
    });

    // Helper for Status Badge Styling
    const getStatusBadge = (status) => {
      const s = status || 'Approved';
      let bg = 'bg-[#E3FCEF] text-[#006644]';
      if (s === 'Draft') bg = 'bg-[#F4F5F7] text-[#42526E]';
      else if (s === 'Issued to Vendor' || s === 'Issued') bg = 'bg-[#DEEBFF] text-[#0747A6]';
      else if (s === 'In Production') bg = 'bg-[#FFF0B3] text-[#172B4D]';
      else if (s === 'Cancelled') bg = 'bg-[#FFEBE6] text-[#DE350B]';
      else if (s === 'Completed') bg = 'bg-[#E3FCEF] text-[#00875A]';
      return `<span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${bg} whitespace-nowrap shadow-2xs">${s}</span>`;
    };

    // Render Existing PM POs Table: S.No, Doc No, Date, Supplier, Status, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'pm-po-table-container',
        tableTitle: `Packaging Material Purchase Orders (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showPmPoDetailModal(row);
        },
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            sortable: false,
            render: (v, r, idx) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer select-none">
                ${String(idx + 1).padStart(2, '0')}
              </span>
            `
          },
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-bold text-xs text-[#172B4D] hover:text-[#00A4B7] cursor-pointer whitespace-nowrap">${v || '-'}</span>
                ${r.subject ? `<span class="text-[10px] text-[#5E6C84] truncate max-w-[200px]">${r.subject}</span>` : ''}
              </div>
            `
          },
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v || '-'}</span>`
          },
          {
            field: 'supplier',
            header: 'Supplier',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || r.vendorAccount || '-'}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.paymentTerms || ''} ${r.freightType ? '• ' + r.freightType : ''}</span>
              </div>
            `
          },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => getStatusBadge(v)
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View PO Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showPmPoDetailModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Purchase Order',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditPmPoModal(row, () => {
                renderTable(this.state.pmPurchaseOrderList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Purchase Order',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Purchase Order (PM)',
                message: `Are you sure you want to delete Packaging Purchase Order <strong>${row.docNo}</strong> (${row.supplier || row.vendorAccount})? This action cannot be undone.`,
                confirmText: 'Delete Order',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.pmPurchaseOrderList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.pmPurchaseOrderList.splice(idx, 1);
                    renderTable(this.state.pmPurchaseOrderList);
                    Toast.show(`Purchase Order ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.pmPurchaseOrderList);

    // Search & Filter Handlers
    container.querySelector('#pm-po-flt-search-btn')?.addEventListener('click', () => {
      const fromVal = container.querySelector('#pm-po-flt-from')?.value;
      const toVal = container.querySelector('#pm-po-flt-to')?.value;
      const statusVal = container.querySelector('#pm-po-flt-status')?.value;

      const filtered = this.state.pmPurchaseOrderList.filter(it => {
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        if (statusVal && statusVal !== 'ALL' && it.status !== statusVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching purchase order(s)`, 'info');
    });

    container.querySelector('#pm-po-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#pm-po-flt-from').value = '2026-10-01';
      container.querySelector('#pm-po-flt-to').value = todayStr;
      container.querySelector('#pm-po-flt-status').value = 'ALL';
      renderTable(this.state.pmPurchaseOrderList);
      Toast.show('PO filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const poFilterBody = container.querySelector('#pm-po-filter-body');
    const poToggleIcon = container.querySelector('#pm-po-filter-toggle-icon');
    container.querySelector('#pm-po-filter-toggle-btn')?.addEventListener('click', () => {
      if (poFilterBody) {
        poFilterBody.classList.toggle('hidden');
        if (poToggleIcon) {
          poToggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // Modal: Add Packaging Purchase Order (Same style as Proforma Invoice)
  showAddPmPoModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextPoNum = (this.state.pmPurchaseOrderList?.length || 0) + 1;
    const defaultDocNo = `PO-PM-2026-${String(200 + nextPoNum).padStart(4, '0')}`;

    let orderItems = [
      {
        proNumber: 'PRO-2026-0819',
        approvedDate: '2026-10-25',
        variety: 'Vannamei White Shrimp',
        grade: '31/40',
        packingStyle: '10 X 1 KG Printed Pouch',
        processType: 'PDTO (Peeled Deveined Tail-On)',
        brand: 'Devi Gold',
        sizeInMm: '650 x 350 x 280 mm',
        availQty: 2500,
        proQty: 20000,
        weightKg: 2000.00,
        rate: 58.50,
        gross: 1170000.00,
        gstPercent: 12,
        sgst: 70200.00,
        cgst: 70200.00,
        taxAmount: 140400.00,
        invoiceAmt: 1310400.00,
        dispatchedDate: todayStr,
        plantCode: 'PLANT-05 (JPT Unit)'
      }
    ];

    const recalculateTotals = () => {
      const totalGross = orderItems.reduce((acc, it) => acc + (it.gross || 0), 0);
      const totalSgst = orderItems.reduce((acc, it) => acc + (it.sgst || 0), 0);
      const totalCgst = orderItems.reduce((acc, it) => acc + (it.cgst || 0), 0);
      const totalTax = orderItems.reduce((acc, it) => acc + (it.taxAmount || 0), 0);
      const netInvoice = orderItems.reduce((acc, it) => acc + (it.invoiceAmt || 0), 0);

      const itemsCountEl = document.getElementById('pm-po-modal-items-count');
      const grossEl = document.getElementById('pm-po-modal-total-gross');
      const sgstEl = document.getElementById('pm-po-modal-total-sgst');
      const cgstEl = document.getElementById('pm-po-modal-total-cgst');
      const taxEl = document.getElementById('pm-po-modal-total-tax');
      const netEl = document.getElementById('pm-po-modal-net-inv');

      if (itemsCountEl) itemsCountEl.innerText = orderItems.length;
      if (grossEl) grossEl.innerText = `₹${totalGross.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (sgstEl) sgstEl.innerText = `₹${totalSgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (cgstEl) cgstEl.innerText = `₹${totalCgst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (taxEl) taxEl.innerText = `₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (netEl) netEl.innerText = `₹${netInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-po-modal-items-tbody');
      if (!tbody) return;

      if (orderItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="15" class="text-center py-6 text-[#5E6C84] italic">
              No items added yet. Fill the item details above and click "Add Item".
            </td>
          </tr>
        `;
        recalculateTotals();
        return;
      }

      tbody.innerHTML = orderItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
          <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.brand || '-'}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.proQty || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">${Number(it.weightKg || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.rate || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.gross || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.sgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.cgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmt || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center text-[#5E6C84] whitespace-nowrap text-[11px]">${it.plantCode || '-'}</td>
          <td class="py-2.5 px-3 text-center whitespace-nowrap">
            <button type="button" class="btn-remove-pm-po-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-remove-pm-po-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          orderItems.splice(idx, 1);
          renderItemsTable();
        });
      });

      recalculateTotals();
    };

    Modal.open({
      title: 'Add Purchase Order (PM)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-pm-po-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Purchase Order Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Header Form Input Fields (Clean 4 columns responsive layout without extra padding/border/bg) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. DOC NO -->
              <div>
                <label for="pm-mpo-doc-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="pm-mpo-doc-no" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="pm-mpo-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="pm-mpo-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 3. VENDOR ACCOUNT -->
              <div>
                <label for="pm-mpo-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR ACCOUNT <span class="text-[#DE350B]">*</span></label>
                <select id="pm-mpo-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Sri Venkateswara Packaging Ltd" selected>Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Polymers & Films India Ltd">Apex Polymers &amp; Films India Ltd</option>
                  <option value="Modern Corrugators Visakhapatnam">Modern Corrugators Visakhapatnam</option>
                  <option value="South Coast Boxes & Cartons">South Coast Boxes &amp; Cartons</option>
                  <option value="Delta Polyfilms Corp">Delta Polyfilms Corp</option>
                </select>
              </div>

              <!-- 4. PAYMENT & TERMS -->
              <div>
                <label for="pm-mpo-payment-terms" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT &amp; TERMS</label>
                <input type="text" id="pm-mpo-payment-terms" value="30 Days Net from Inward Acceptance" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 5. FREIGHT TYPE -->
              <div>
                <label for="pm-mpo-freight-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE</label>
                <select id="pm-mpo-freight-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Door Delivery (Freight Included)" selected>Door Delivery (Freight Included)</option>
                  <option value="Ex-Works with Paid Transit">Ex-Works with Paid Transit</option>
                  <option value="To Pay (Freight Extra)">To Pay (Freight Extra)</option>
                </select>
              </div>

              <!-- 6. FREIGHT CHARGES -->
              <div>
                <label for="pm-mpo-freight-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT CHARGES (₹)</label>
                <input type="number" id="pm-mpo-freight-charges" value="0.00" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 7. SUBJECT -->
              <div>
                <label for="pm-mpo-subject" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUBJECT</label>
                <input type="text" id="pm-mpo-subject" value="Procurement of Master Cartons & Packaging Items" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 8. STATUS -->
              <div>
                <label for="pm-mpo-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
                <select id="pm-mpo-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Approved" selected>Approved</option>
                  <option value="Draft">Draft</option>
                  <option value="Issued to Vendor">Issued to Vendor</option>
                  <option value="In Production">In Production</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <!-- 9. NARRATION (Full width) -->
              <div class="col-span-1 sm:col-span-2 md:col-span-4">
                <label for="pm-mpo-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-mpo-narration" placeholder="Purchase order purpose and special packaging instructions..." value="Packaging materials procurement against approved indent for export pack" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow (From Indent) - Item Details Fields -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow (From Indent) - Item Details Fields</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Item Input Grid Card (4 columns responsive layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. PRO Number -->
                <div>
                  <label for="pm-mpoi-pro-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO NUMBER</label>
                  <input type="text" id="pm-mpoi-pro-no" value="PRO-2026-0819" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. Approved Date -->
                <div>
                  <label for="pm-mpoi-app-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">APPROVED DATE</label>
                  <input type="date" id="pm-mpoi-app-date" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>

                <!-- 3. Variety * -->
                <div>
                  <label for="pm-mpoi-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VARIETY <span class="text-[#DE350B]">*</span></label>
                  <select id="pm-mpoi-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Vannamei White Shrimp" selected>Vannamei White Shrimp</option>
                    <option value="Black Tiger Shrimp">Black Tiger Shrimp</option>
                    <option value="Sea White Shrimp">Sea White Shrimp</option>
                    <option value="Pink Brown Shrimp">Pink Brown Shrimp</option>
                    <option value="Freshwater Scampi">Freshwater Scampi</option>
                  </select>
                </div>

                <!-- 4. Grade -->
                <div>
                  <label for="pm-mpoi-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GRADE</label>
                  <select id="pm-mpoi-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="16/20">16/20</option>
                    <option value="21/25">21/25</option>
                    <option value="26/30">26/30</option>
                    <option value="31/40" selected>31/40</option>
                    <option value="41/50">41/50</option>
                    <option value="51/60">51/60</option>
                  </select>
                </div>

                <!-- 5. Packing Style -->
                <div>
                  <label for="pm-mpoi-packing-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PACKING STYLE</label>
                  <select id="pm-mpoi-packing-style" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="10 X 1 KG Printed Pouch" selected>10 X 1 KG Printed Pouch</option>
                    <option value="6 X 2 KG Master Carton">6 X 2 KG Master Carton</option>
                    <option value="1 X 10 KG Block IQF">1 X 10 KG Block IQF</option>
                    <option value="5 X 2 Lb Retail Zipper Bag">5 X 2 Lb Retail Zipper Bag</option>
                    <option value="10 X 2 Lb Export Master">10 X 2 Lb Export Master</option>
                  </select>
                </div>

                <!-- 6. Process Type -->
                <div>
                  <label for="pm-mpoi-process-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCESS TYPE</label>
                  <select id="pm-mpoi-process-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="PDTO (Peeled Deveined Tail-On)" selected>PDTO (Peeled Deveined Tail-On)</option>
                    <option value="HLSO (Headless Shell-On)">HLSO (Headless Shell-On)</option>
                    <option value="PD (Peeled &amp; Deveined)">PD (Peeled &amp; Deveined)</option>
                    <option value="Cooked Tail-On">Cooked Tail-On</option>
                    <option value="EZ Peel">EZ Peel</option>
                  </select>
                </div>

                <!-- 7. Brand -->
                <div>
                  <label for="pm-mpoi-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                  <input type="text" id="pm-mpoi-brand" value="Devi Gold" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 8. Size in mm -->
                <div>
                  <label for="pm-mpoi-size-mm" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SIZE IN MM</label>
                  <input type="text" id="pm-mpoi-size-mm" value="650 x 350 x 280 mm" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Available Qty -->
                <div>
                  <label for="pm-mpoi-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="pm-mpoi-avail-qty" value="2500" min="0" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. PRO Qty -->
                <div>
                  <label for="pm-mpoi-pro-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="pm-mpoi-pro-qty" value="20000" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 11. Weight(KGs) -->
                <div>
                  <label for="pm-mpoi-weight-kg" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">WEIGHT(KGS)</label>
                  <input type="number" id="pm-mpoi-weight-kg" value="2000.00" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 12. Rate -->
                <div>
                  <label for="pm-mpoi-rate" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RATE (₹) <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="pm-mpoi-rate" value="58.50" step="0.01" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 13. Gross -->
                <div>
                  <label for="pm-mpoi-gross" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GROSS (₹)</label>
                  <input type="number" id="pm-mpoi-gross" value="1170000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 14. GST % -->
                <div>
                  <label for="pm-mpoi-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="pm-mpoi-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0% (Nil)</option>
                    <option value="5">5%</option>
                    <option value="12" selected>12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 15. SGST -->
                <div>
                  <label for="pm-mpoi-sgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SGST (₹)</label>
                  <input type="number" id="pm-mpoi-sgst" value="70200.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-semibold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 16. CGST -->
                <div>
                  <label for="pm-mpoi-cgst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CGST (₹)</label>
                  <input type="number" id="pm-mpoi-cgst" value="70200.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-semibold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 17. Invoice Amount -->
                <div>
                  <label for="pm-mpoi-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMOUNT (₹)</label>
                  <input type="number" id="pm-mpoi-inv-amt" value="1310400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 18. Tax Amount -->
                <div>
                  <label for="pm-mpoi-tax-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TAX AMOUNT (₹)</label>
                  <input type="number" id="pm-mpoi-tax-amt" value="140400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 19. Dispatched Date -->
                <div>
                  <label for="pm-mpoi-disp-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DISPATCHED DATE</label>
                  <input type="date" id="pm-mpoi-disp-date" value="${todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
                </div>

                <!-- 20. Plant Code -->
                <div>
                  <label for="pm-mpoi-plant-code" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PLANT CODE</label>
                  <select id="pm-mpoi-plant-code" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="PLANT-05 (JPT Unit)" selected>PLANT-05 (JPT Unit)</option>
                    <option value="PLANT-01 (Main Processing)">PLANT-01 (Main Processing)</option>
                    <option value="PLANT-02 (Cold Storage Unit)">PLANT-02 (Cold Storage Unit)</option>
                  </select>
                </div>

                <!-- 21. Action Button (Add Item) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-pm-po-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Items Preview Table Card -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Brand</th>
                    <th class="py-2.5 px-3 text-right">PRO Qty</th>
                    <th class="py-2.5 px-3 text-right">Weight (KGs)</th>
                    <th class="py-2.5 px-3 text-right">Rate</th>
                    <th class="py-2.5 px-3 text-right">Gross</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">SGST</th>
                    <th class="py-2.5 px-3 text-right">CGST</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3 text-center">Plant Code</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="pm-po-modal-items-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 3: Summary Calculation Card -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-6">
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Items Count</span>
                <span id="pm-po-modal-items-count" class="text-sm font-mono font-bold text-[#172B4D]">0</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Gross</span>
                <span id="pm-po-modal-total-gross" class="text-sm font-mono font-bold text-[#172B4D]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total SGST</span>
                <span id="pm-po-modal-total-sgst" class="text-sm font-mono font-semibold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total CGST</span>
                <span id="pm-po-modal-total-cgst" class="text-sm font-mono font-semibold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Tax</span>
                <span id="pm-po-modal-total-tax" class="text-sm font-mono font-bold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Net Invoice Value</span>
                <span id="pm-po-modal-net-inv" class="text-base font-mono font-bold text-[#00875A]">₹0.00</span>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Purchase Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#pm-mpo-doc-no')?.value?.trim();
            const date = modalRoot.querySelector('#pm-mpo-date')?.value;
            const vendorAccount = modalRoot.querySelector('#pm-mpo-vendor')?.value;
            const paymentTerms = modalRoot.querySelector('#pm-mpo-payment-terms')?.value?.trim();
            const freightType = modalRoot.querySelector('#pm-mpo-freight-type')?.value;
            const freightCharges = parseFloat(modalRoot.querySelector('#pm-mpo-freight-charges')?.value || 0);
            const subject = modalRoot.querySelector('#pm-mpo-subject')?.value?.trim();
            const status = modalRoot.querySelector('#pm-mpo-status')?.value;
            const narration = modalRoot.querySelector('#pm-mpo-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('DOC NO is required', 'error');
              modalRoot.querySelector('#pm-mpo-doc-no')?.focus();
              return;
            }
            if (!date) {
              Toast.show('DATE is required', 'error');
              modalRoot.querySelector('#pm-mpo-date')?.focus();
              return;
            }
            if (!vendorAccount) {
              Toast.show('VENDOR ACCOUNT is required', 'error');
              modalRoot.querySelector('#pm-mpo-vendor')?.focus();
              return;
            }
            if (orderItems.length === 0) {
              Toast.show('Please add at least one item before saving.', 'warning');
              return;
            }

            const totalInvoice = orderItems.reduce((acc, it) => acc + (it.invoiceAmt || 0), 0) + freightCharges;

            // Custom Confirmation Popup
            Modal.confirm({
              title: 'Confirm Save Purchase Order (PM)',
              message: `Are you sure you want to save Packaging Purchase Order <strong>${docNo}</strong> for <strong>${vendorAccount}</strong> with <strong>${orderItems.length} item(s)</strong> totaling <strong>₹${totalInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>?`,
              confirmText: 'Save Purchase Order',
              onConfirm: () => {
                const newRecord = {
                  id: Date.now(),
                  docNo,
                  date,
                  supplier: vendorAccount,
                  vendorAccount,
                  paymentTerms,
                  freightType,
                  freightCharges,
                  subject,
                  status: status || 'Approved',
                  narration,
                  items: JSON.parse(JSON.stringify(orderItems))
                };

                this.state.pmPurchaseOrderList.unshift(newRecord);
                Modal.close();
                if (onSuccess) onSuccess();
                Toast.show(`Purchase Order ${docNo} created successfully!`, 'success');
              }
            });
          }
        }
      ]
    });

    renderItemsTable();

    // Live calculation for item entry
    const calcItemValues = () => {
      const proQty = parseFloat(document.getElementById('pm-mpoi-pro-qty')?.value || 0);
      const rate = parseFloat(document.getElementById('pm-mpoi-rate')?.value || 0);
      const gstPct = parseFloat(document.getElementById('pm-mpoi-gst-pct')?.value || 0);

      const gross = proQty * rate;
      const halfRate = gstPct / 2;
      const sgst = gross * (halfRate / 100);
      const cgst = gross * (halfRate / 100);
      const taxAmt = sgst + cgst;
      const invAmt = gross + taxAmt;

      const grossEl = document.getElementById('pm-mpoi-gross');
      const sgstEl = document.getElementById('pm-mpoi-sgst');
      const cgstEl = document.getElementById('pm-mpoi-cgst');
      const taxEl = document.getElementById('pm-mpoi-tax-amt');
      const invEl = document.getElementById('pm-mpoi-inv-amt');

      if (grossEl) grossEl.value = gross.toFixed(2);
      if (sgstEl) sgstEl.value = sgst.toFixed(2);
      if (cgstEl) cgstEl.value = cgst.toFixed(2);
      if (taxEl) taxEl.value = taxAmt.toFixed(2);
      if (invEl) invEl.value = invAmt.toFixed(2);
    };

    ['pm-mpoi-pro-qty', 'pm-mpoi-rate', 'pm-mpoi-gst-pct'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcItemValues);
      document.getElementById(id)?.addEventListener('change', calcItemValues);
    });

    // Add item click
    document.getElementById('modal-pm-po-btn-add-item')?.addEventListener('click', () => {
      const proNumber = document.getElementById('pm-mpoi-pro-no')?.value?.trim();
      const approvedDate = document.getElementById('pm-mpoi-app-date')?.value;
      const variety = document.getElementById('pm-mpoi-variety')?.value;
      const grade = document.getElementById('pm-mpoi-grade')?.value;
      const packingStyle = document.getElementById('pm-mpoi-packing-style')?.value;
      const processType = document.getElementById('pm-mpoi-process-type')?.value;
      const brand = document.getElementById('pm-mpoi-brand')?.value?.trim();
      const sizeInMm = document.getElementById('pm-mpoi-size-mm')?.value?.trim();
      const availQty = parseFloat(document.getElementById('pm-mpoi-avail-qty')?.value || 0);
      const proQty = parseFloat(document.getElementById('pm-mpoi-pro-qty')?.value || 0);
      const weightKg = parseFloat(document.getElementById('pm-mpoi-weight-kg')?.value || 0);
      const rate = parseFloat(document.getElementById('pm-mpoi-rate')?.value || 0);
      const gross = parseFloat(document.getElementById('pm-mpoi-gross')?.value || 0);
      const gstPercent = parseFloat(document.getElementById('pm-mpoi-gst-pct')?.value || 0);
      const sgst = parseFloat(document.getElementById('pm-mpoi-sgst')?.value || 0);
      const cgst = parseFloat(document.getElementById('pm-mpoi-cgst')?.value || 0);
      const taxAmount = parseFloat(document.getElementById('pm-mpoi-tax-amt')?.value || 0);
      const invoiceAmt = parseFloat(document.getElementById('pm-mpoi-inv-amt')?.value || 0);
      const dispatchedDate = document.getElementById('pm-mpoi-disp-date')?.value;
      const plantCode = document.getElementById('pm-mpoi-plant-code')?.value;

      if (!variety) {
        Toast.show('Variety is required', 'warning');
        return;
      }
      if (proQty <= 0) {
        Toast.show('PRO Qty must be greater than zero', 'warning');
        return;
      }
      if (rate <= 0) {
        Toast.show('Rate must be greater than zero', 'warning');
        return;
      }

      orderItems.push({
        proNumber,
        approvedDate,
        variety,
        grade,
        packingStyle,
        processType,
        brand,
        sizeInMm,
        availQty,
        proQty,
        weightKg,
        rate,
        gross,
        gstPercent,
        sgst,
        cgst,
        taxAmount,
        invoiceAmt,
        dispatchedDate,
        plantCode
      });

      renderItemsTable();
      Toast.show(`Added "${variety}" to purchase order items`, 'success');
    });
  },

  // Modal: Edit Packaging Purchase Order
  showEditPmPoModal(row, onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    let orderItems = Array.isArray(row.items) ? JSON.parse(JSON.stringify(row.items)) : [];

    const recalculateTotals = () => {
      const totalGross = orderItems.reduce((acc, it) => acc + (it.gross || it.baseValue || 0), 0);
      const totalTax = orderItems.reduce((acc, it) => acc + (it.taxAmount || it.gstTaxAmount || 0), 0);
      const netInvoice = orderItems.reduce((acc, it) => acc + (it.invoiceAmt || it.invoiceAmount || 0), 0);

      const itemsCountEl = document.getElementById('pm-po-edit-items-count');
      const grossEl = document.getElementById('pm-po-edit-total-gross');
      const taxEl = document.getElementById('pm-po-edit-total-tax');
      const netEl = document.getElementById('pm-po-edit-net-inv');

      if (itemsCountEl) itemsCountEl.innerText = orderItems.length;
      if (grossEl) grossEl.innerText = `₹${totalGross.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (taxEl) taxEl.innerText = `₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (netEl) netEl.innerText = `₹${netInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-po-edit-items-tbody');
      if (!tbody) return;

      if (orderItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="15" class="text-center py-6 text-[#5E6C84] italic">
              No items in this purchase order.
            </td>
          </tr>
        `;
        recalculateTotals();
        return;
      }

      tbody.innerHTML = orderItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety || it.item || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
          <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.brand || '-'}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.proQty || it.quantity || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">${Number(it.weightKg || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.rate || it.unitPrice || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.gross || it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.sgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.cgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmt || it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center text-[#5E6C84] whitespace-nowrap text-[11px]">${it.plantCode || '-'}</td>
          <td class="py-2.5 px-3 text-center whitespace-nowrap">
            <button type="button" class="btn-remove-edit-pm-po-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-remove-edit-pm-po-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          orderItems.splice(idx, 1);
          renderItemsTable();
        });
      });

      recalculateTotals();
    };

    Modal.open({
      title: `Edit Purchase Order (PM) — ${row.docNo}`,
      size: 'full',
      confirmActions: false,
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Section 1: Header Details -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Purchase Order Header Details</h4>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label for="pm-edit-po-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
                <input type="text" id="pm-edit-po-doc" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-edit-po-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="date" id="pm-edit-po-date" value="${row.date || todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-edit-po-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR ACCOUNT <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="pm-edit-po-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Sri Venkateswara Packaging Ltd" ${(row.supplier || row.vendorAccount) === 'Sri Venkateswara Packaging Ltd' ? 'selected' : ''}>Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Polymers & Films India Ltd" ${(row.supplier || row.vendorAccount) === 'Apex Polymers & Films India Ltd' ? 'selected' : ''}>Apex Polymers &amp; Films India Ltd</option>
                  <option value="Modern Corrugators Visakhapatnam" ${(row.supplier || row.vendorAccount) === 'Modern Corrugators Visakhapatnam' ? 'selected' : ''}>Modern Corrugators Visakhapatnam</option>
                  <option value="South Coast Boxes & Cartons" ${(row.supplier || row.vendorAccount) === 'South Coast Boxes & Cartons' ? 'selected' : ''}>South Coast Boxes &amp; Cartons</option>
                  <option value="Delta Polyfilms Corp" ${(row.supplier || row.vendorAccount) === 'Delta Polyfilms Corp' ? 'selected' : ''}>Delta Polyfilms Corp</option>
                </select>
              </div>
              <div>
                <label for="pm-edit-po-payment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PAYMENT &amp; TERMS</label>
                <input type="text" id="pm-edit-po-payment" value="${row.paymentTerms || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-edit-po-freight" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE</label>
                <select id="pm-edit-po-freight" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Door Delivery (Freight Included)" ${row.freightType === 'Door Delivery (Freight Included)' ? 'selected' : ''}>Door Delivery (Freight Included)</option>
                  <option value="Ex-Works with Paid Transit" ${row.freightType === 'Ex-Works with Paid Transit' ? 'selected' : ''}>Ex-Works with Paid Transit</option>
                  <option value="To Pay (Freight Extra)" ${row.freightType === 'To Pay (Freight Extra)' ? 'selected' : ''}>To Pay (Freight Extra)</option>
                </select>
              </div>
              <div>
                <label for="pm-edit-po-fr-charges" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT CHARGES (₹)</label>
                <input type="number" id="pm-edit-po-fr-charges" value="${row.freightCharges || 0.00}" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-edit-po-subject" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SUBJECT</label>
                <input type="text" id="pm-edit-po-subject" value="${row.subject || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-edit-po-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
                <select id="pm-edit-po-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Approved" ${row.status === 'Approved' ? 'selected' : ''}>Approved</option>
                  <option value="Draft" ${row.status === 'Draft' ? 'selected' : ''}>Draft</option>
                  <option value="Issued to Vendor" ${row.status === 'Issued to Vendor' ? 'selected' : ''}>Issued to Vendor</option>
                  <option value="In Production" ${row.status === 'In Production' ? 'selected' : ''}>In Production</option>
                  <option value="Completed" ${row.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
              </div>
              <div class="col-span-1 sm:col-span-2 md:col-span-4">
                <label for="pm-edit-po-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-edit-po-narration" value="${row.narration || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="p-3 bg-[#F8FAFC] border-b border-[#DFE1E6] flex items-center justify-between">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Purchase Order Items (<span id="pm-po-edit-items-count">${orderItems.length}</span>)</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Brand</th>
                    <th class="py-2.5 px-3 text-right">PRO Qty</th>
                    <th class="py-2.5 px-3 text-right">Weight (KGs)</th>
                    <th class="py-2.5 px-3 text-right">Rate</th>
                    <th class="py-2.5 px-3 text-right">Gross</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">SGST</th>
                    <th class="py-2.5 px-3 text-right">CGST</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3 text-center">Plant Code</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="pm-po-edit-items-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 3: Summary -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-6">
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Gross</span>
                <span id="pm-po-edit-total-gross" class="text-sm font-mono font-bold text-[#172B4D]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Tax</span>
                <span id="pm-po-edit-total-tax" class="text-sm font-mono font-bold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Net Invoice Value</span>
                <span id="pm-po-edit-net-inv" class="text-base font-mono font-bold text-[#00875A]">₹0.00</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Update Purchase Order',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const date = modalRoot.querySelector('#pm-edit-po-date')?.value;
            const vendorAccount = modalRoot.querySelector('#pm-edit-po-vendor')?.value;
            const paymentTerms = modalRoot.querySelector('#pm-edit-po-payment')?.value?.trim();
            const freightType = modalRoot.querySelector('#pm-edit-po-freight')?.value;
            const freightCharges = parseFloat(modalRoot.querySelector('#pm-edit-po-fr-charges')?.value || 0);
            const subject = modalRoot.querySelector('#pm-edit-po-subject')?.value?.trim();
            const status = modalRoot.querySelector('#pm-edit-po-status')?.value;
            const narration = modalRoot.querySelector('#pm-edit-po-narration')?.value?.trim();

            if (!date) {
              Toast.show('Date is required', 'error');
              return;
            }

            Modal.confirm({
              title: 'Confirm Update Purchase Order (PM)',
              message: `Are you sure you want to update Purchase Order <strong>${row.docNo}</strong>?`,
              confirmText: 'Update Order',
              onConfirm: () => {
                row.date = date;
                row.supplier = vendorAccount;
                row.vendorAccount = vendorAccount;
                row.paymentTerms = paymentTerms;
                row.freightType = freightType;
                row.freightCharges = freightCharges;
                row.subject = subject;
                row.status = status;
                row.narration = narration;
                row.items = JSON.parse(JSON.stringify(orderItems));

                Modal.close();
                if (onSuccess) onSuccess();
                Toast.show(`Purchase Order ${row.docNo} updated successfully!`, 'success');
              }
            });
          }
        }
      ]
    });

    renderItemsTable();
  },

  // Modal: View Packaging Purchase Order Details
  showPmPoDetailModal(row) {
    const items = Array.isArray(row.items) ? row.items : [];
    const totalGross = items.reduce((acc, it) => acc + (it.gross || it.baseValue || 0), 0);
    const totalTax = items.reduce((acc, it) => acc + (it.taxAmount || it.gstTaxAmount || 0), 0);
    const totalNet = items.reduce((acc, it) => acc + (it.invoiceAmt || it.invoiceAmount || it.totalValue || 0), 0) + (row.freightCharges || 0);

    const getStatusBadge = (status) => {
      const s = status || 'Approved';
      let bg = 'bg-[#E3FCEF] text-[#006644]';
      if (s === 'Draft') bg = 'bg-[#F4F5F7] text-[#42526E]';
      else if (s === 'Issued to Vendor' || s === 'Issued') bg = 'bg-[#DEEBFF] text-[#0747A6]';
      else if (s === 'In Production') bg = 'bg-[#FFF0B3] text-[#172B4D]';
      else if (s === 'Cancelled') bg = 'bg-[#FFEBE6] text-[#DE350B]';
      else if (s === 'Completed') bg = 'bg-[#E3FCEF] text-[#00875A]';
      return `<span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${bg} whitespace-nowrap">${s}</span>`;
    };

    Modal.open({
      title: `Purchase Order (PM) Details — ${row.docNo}`,
      size: 'full',
      confirmActions: false,
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Summary Header (Clean 4 columns without border/bg) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DATE</span>
              <span class="font-mono font-medium text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">STATUS</span>
              <div>${getStatusBadge(row.status)}</div>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">FREIGHT CHARGES</span>
              <span class="font-mono text-xs text-[#172B4D]">₹${Number(row.freightCharges || 0).toFixed(2)}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">VENDOR ACCOUNT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.supplier || row.vendorAccount}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">PAYMENT &amp; TERMS</span>
              <span class="text-xs text-[#172B4D]">${row.paymentTerms || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">FREIGHT TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.freightType || '-'}</span>
            </div>
            ${row.subject ? `
              <div class="col-span-2 sm:col-span-4 border-t border-[#DFE1E6] pt-2 mt-1">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">SUBJECT</span>
                <span class="text-xs text-[#172B4D] font-semibold">${row.subject}</span>
              </div>
            ` : ''}
            ${row.narration ? `
              <div class="col-span-2 sm:col-span-4 border-t border-[#DFE1E6] pt-2 mt-1">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">NARRATION</span>
                <span class="text-xs text-[#172B4D] font-medium">${row.narration}</span>
              </div>
            ` : ''}
          </div>

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#DFE1E6]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow (From Indent) - Item Details (${items.length})</h4>
            </div>
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Brand</th>
                    <th class="py-2.5 px-3 text-right">PRO Qty</th>
                    <th class="py-2.5 px-3 text-right">Weight (KGs)</th>
                    <th class="py-2.5 px-3 text-right">Rate</th>
                    <th class="py-2.5 px-3 text-right">Gross</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">SGST</th>
                    <th class="py-2.5 px-3 text-right">CGST</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3 text-center">Plant Code</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6]">
                  ${items.map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety || it.item || '-'}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
                      <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.brand || '-'}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.proQty || it.quantity || 0).toLocaleString()}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">${Number(it.weightKg || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.rate || it.unitPrice || 0).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.gross || it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent}%</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.sgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.cgst || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmt || it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-center text-[#5E6C84] whitespace-nowrap text-[11px]">${it.plantCode || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
                <tfoot class="bg-[#F8FAFC] border-t border-[#DFE1E6] font-bold text-xs">
                  <tr>
                    <td colspan="8" class="py-2.5 px-3 text-right text-[#5E6C84] uppercase">Total Valuation:</td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#172B4D]">₹${totalGross.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td></td>
                    <td colspan="2" class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">Tax: ₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#00875A]">₹${totalNet.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });
  },

  // =========================================================================
  // 2c. GOODS RECEIPT NOTE (PM)
  // =========================================================================
  renderPackingMaterialGRN(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Goods Receipt Note (PM)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="pm-grn-toggle-form-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span id="pm-grn-toggle-text">Add Goods Receipt Note</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card (4 Columns: From Date, To Date, Status, Search) -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="pm-grn-filter-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="pm-grn-filter-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="pm-grn-filter-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="pm-grn-filter-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. From Date -->
          <div>
            <label for="pm-grn-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="pm-grn-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. To Date -->
          <div>
            <label for="pm-grn-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="pm-grn-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 3. Status -->
          <div>
            <label for="pm-grn-flt-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
            <select id="pm-grn-flt-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Statuses</option>
              <option value="Verified & Binned">Verified &amp; Binned</option>
              <option value="Pending Verification">Pending Verification</option>
              <option value="Approved">Approved</option>
              <option value="Draft">Draft</option>
              <option value="Quality Hold">Quality Hold</option>
            </select>
          </div>

          <!-- 4. Search Button in Fourth Column -->
          <div class="flex items-end">
            <button type="button" id="pm-grn-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Data Table Card: S.No, Doc No, Date, Vendor, Invoice No, Status, Actions -->
      <div id="pm-grn-table-container"></div>
    `;

    // Direct Click Handler for "Add Goods Receipt Note" Button -> Opens Add GRN Modal Popup
    container.querySelector('#pm-grn-toggle-form-btn')?.addEventListener('click', () => {
      this.showAddPmGrnModal(() => {
        renderTable(this.state.pmGrnList);
      });
    });

    // Helper for Status Badge Styling
    const getStatusBadge = (status) => {
      const s = status || 'Verified & Binned';
      let bg = 'bg-[#E3FCEF] text-[#006644]';
      if (s === 'Pending Verification' || s === 'Draft') bg = 'bg-[#F4F5F7] text-[#42526E]';
      else if (s === 'Quality Hold') bg = 'bg-[#FFF0B3] text-[#172B4D]';
      else if (s === 'Rejected') bg = 'bg-[#FFEBE6] text-[#DE350B]';
      return `<span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${bg} whitespace-nowrap shadow-2xs">${s}</span>`;
    };

    // Render Existing PM GRNs Table: S.No, Doc No, Date, Vendor, Invoice No, Status, Actions
    const renderTable = (data) => {
      new DataTable({
        containerId: 'pm-grn-table-container',
        tableTitle: `Packaging Material Goods Receipt Notes (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showPmGrnDetailsModal(row);
        },
        columns: [
          {
            field: 'sNo',
            header: 'S.No',
            sortable: false,
            render: (v, r, idx) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer select-none">
                ${String(idx + 1).padStart(2, '0')}
              </span>
            `
          },
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-mono font-bold text-xs text-[#172B4D] hover:text-[#00A4B7] cursor-pointer whitespace-nowrap">${v || '-'}</span>
                ${r.narration ? `<span class="text-[10px] text-[#5E6C84] truncate max-w-[200px]">${r.narration}</span>` : ''}
              </div>
            `
          },
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v || '-'}</span>`
          },
          {
            field: 'vendor',
            header: 'Vendor',
            sortable: true,
            render: (v, r) => `
              <div class="flex flex-col">
                <span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v || r.vendorAccount || r.supplier || '-'}</span>
                <span class="text-[10px] text-[#5E6C84]">${r.freightType || ''}</span>
              </div>
            `
          },
          {
            field: 'invoiceNumber',
            header: 'Invoice No',
            sortable: true,
            render: (v, r) => `<span class="font-mono text-xs font-semibold text-[#172B4D] whitespace-nowrap">${v || r.invoiceNo || '-'}</span>`
          },
          {
            field: 'status',
            header: 'Status',
            sortable: true,
            render: v => getStatusBadge(v)
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View GRN Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showPmGrnDetailsModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit GRN',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditPmGrnModal(row, () => {
                renderTable(this.state.pmGrnList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete GRN',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Goods Receipt Note (PM)',
                message: `Are you sure you want to delete Packaging GRN <strong>${row.docNo}</strong> (${row.vendor || row.vendorAccount || row.supplier})? This action cannot be undone.`,
                confirmText: 'Delete GRN',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.pmGrnList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.pmGrnList.splice(idx, 1);
                    renderTable(this.state.pmGrnList);
                    Toast.show(`GRN ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.pmGrnList);

    // Search & Filter Handlers
    container.querySelector('#pm-grn-flt-search-btn')?.addEventListener('click', () => {
      const fromVal = container.querySelector('#pm-grn-flt-from')?.value;
      const toVal = container.querySelector('#pm-grn-flt-to')?.value;
      const statusVal = container.querySelector('#pm-grn-flt-status')?.value;

      const filtered = this.state.pmGrnList.filter(it => {
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        if (statusVal && statusVal !== 'ALL' && it.status !== statusVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching GRN(s)`, 'info');
    });

    container.querySelector('#pm-grn-filter-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#pm-grn-flt-from').value = '2026-10-01';
      container.querySelector('#pm-grn-flt-to').value = todayStr;
      container.querySelector('#pm-grn-flt-status').value = 'ALL';
      renderTable(this.state.pmGrnList);
      Toast.show('GRN filters reset to default', 'info');
    });

    // Toggle Filters Accordion
    const grnFilterBody = container.querySelector('#pm-grn-filter-body');
    const grnToggleIcon = container.querySelector('#pm-grn-filter-toggle-icon');
    container.querySelector('#pm-grn-filter-toggle-btn')?.addEventListener('click', () => {
      if (grnFilterBody) {
        grnFilterBody.classList.toggle('hidden');
        if (grnToggleIcon) {
          grnToggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // Modal: Add Packaging Goods Receipt Note
  showAddPmGrnModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextGrnNum = (this.state.pmGrnList?.length || 0) + 1;
    const defaultDocNo = `GRN-PM-2026-${String(50 + nextGrnNum).padStart(4, '0')}`;

    let grnItems = [
      {
        proNumber: 'PRO-2026-0819',
        typeOfOrder: 'Export Packaging Order',
        variety: 'Vannamei White Shrimp',
        grade: '31/40',
        packingStyle: '10 X 1 KG Printed Pouch',
        processType: 'PDTO (Peeled Deveined Tail-On)',
        brand: 'Devi Gold',
        sizeInMm: '650 x 350 x 280 mm',
        availQty: 2500,
        ppoQty: 20000,
        receivedQty: 20000,
        deviationQty: 0,
        location: 'Packaging Store Vault #1',
        batch: 'BAT-PM-2026-01',
        itemPrice: 58.50,
        baseValue: 1170000.00,
        deviationAmount: 0.00,
        gstPercent: 12,
        taxAmount: 140400.00,
        invoiceAmount: 1310400.00,
        purpose: 'Commercial export packing order allocation',
        attachment: '',
        remarks: 'Physical count verified; QC seal intact'
      }
    ];

    const recalculateTotals = () => {
      const totalBase = grnItems.reduce((acc, it) => acc + (it.baseValue || 0), 0);
      const totalDevAmt = grnItems.reduce((acc, it) => acc + (it.deviationAmount || 0), 0);
      const totalTax = grnItems.reduce((acc, it) => acc + (it.taxAmount || 0), 0);
      const netInvoice = grnItems.reduce((acc, it) => acc + (it.invoiceAmount || 0), 0);

      const itemsCountEl = document.getElementById('pm-grn-modal-items-count');
      const baseEl = document.getElementById('pm-grn-modal-total-base');
      const devEl = document.getElementById('pm-grn-modal-total-dev');
      const taxEl = document.getElementById('pm-grn-modal-total-tax');
      const netEl = document.getElementById('pm-grn-modal-net-inv');

      if (itemsCountEl) itemsCountEl.innerText = grnItems.length;
      if (baseEl) baseEl.innerText = `₹${totalBase.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (devEl) devEl.innerText = `₹${totalDevAmt.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (taxEl) taxEl.innerText = `₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (netEl) netEl.innerText = `₹${netInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-grn-modal-items-tbody');
      if (!tbody) return;

      if (grnItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="15" class="text-center py-6 text-[#5E6C84] italic">
              No items added yet. Fill the item details above and click "Add Item".
            </td>
          </tr>
        `;
        recalculateTotals();
        return;
      }

      tbody.innerHTML = grnItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
          <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.location || '-'}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84] whitespace-nowrap">${it.batch || '-'}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84] whitespace-nowrap">${Number(it.ppoQty || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.receivedQty || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${(it.deviationQty || 0) < 0 ? 'text-[#DE350B]' : (it.deviationQty > 0 ? 'text-[#00875A]' : 'text-[#5E6C84]')} whitespace-nowrap">${it.deviationQty || 0}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.taxAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center whitespace-nowrap">
            <button type="button" class="btn-remove-pm-grn-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-remove-pm-grn-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          grnItems.splice(idx, 1);
          renderItemsTable();
        });
      });

      recalculateTotals();
    };

    Modal.open({
      title: 'Add Goods Receipt Note (PM)',
      size: 'full',
      confirmActions: false,
      content: `
        <form id="modal-add-pm-grn-form" class="space-y-4 text-xs text-[#172B4D]" onsubmit="return false;">
          <!-- Section 1: Header Information -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Goods Receipt Note Header Information</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Header Form Input Fields (Clean 4 columns responsive layout) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <!-- 1. DOC NO -->
              <div>
                <label for="pm-mgrn-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="pm-mgrn-doc" value="${defaultDocNo}" required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 2. DATE -->
              <div>
                <label for="pm-mgrn-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="pm-mgrn-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 3. VENDOR ACCOUNT -->
              <div>
                <label for="pm-mgrn-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR ACCOUNT <span class="text-[#DE350B]">*</span></label>
                <select id="pm-mgrn-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Sri Venkateswara Packaging Ltd" selected>Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Polymers & Films India Ltd">Apex Polymers &amp; Films India Ltd</option>
                  <option value="Modern Corrugators Visakhapatnam">Modern Corrugators Visakhapatnam</option>
                  <option value="South Coast Boxes & Cartons">South Coast Boxes &amp; Cartons</option>
                  <option value="Delta Polyfilms Corp">Delta Polyfilms Corp</option>
                </select>
              </div>

              <!-- 4. FREIGHT TYPE -->
              <div>
                <label for="pm-mgrn-freight-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE</label>
                <select id="pm-mgrn-freight-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Door Delivery (Freight Included)" selected>Door Delivery (Freight Included)</option>
                  <option value="Ex-Works with Paid Transit">Ex-Works with Paid Transit</option>
                  <option value="To Pay (Freight Extra)">To Pay (Freight Extra)</option>
                </select>
              </div>

              <!-- 5. IS GST -->
              <div>
                <label for="pm-mgrn-is-gst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IS GST</label>
                <select id="pm-mgrn-is-gst" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Yes (Registered GST Invoice)" selected>Yes (Registered GST Invoice)</option>
                  <option value="No (Non-GST / Exempt)">No (Non-GST / Exempt)</option>
                </select>
              </div>

              <!-- 6. INVOICE NUMBER -->
              <div>
                <label for="pm-mgrn-inv-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B]">*</span></label>
                <input type="text" id="pm-mgrn-inv-no" value="INV-SVP-8825" placeholder="Supplier invoice number..." required class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>

              <!-- 7. INVOICE DATE -->
              <div>
                <label for="pm-mgrn-inv-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B]">*</span></label>
                <input type="date" id="pm-mgrn-inv-date" value="${todayStr}" required class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" onclick="this.showPicker ? this.showPicker() : this.focus()" />
              </div>

              <!-- 8. INVOICE ATTACHMENT -->
              <div>
                <label for="pm-mgrn-inv-attach" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE ATTACHMENT</label>
                <input type="file" id="pm-mgrn-inv-attach" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
              </div>

              <!-- 9. CREDIT NOTE TYPE -->
              <div>
                <label for="pm-mgrn-credit-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CREDIT NOTE TYPE</label>
                <select id="pm-mgrn-credit-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="None" selected>None</option>
                  <option value="Shortage Deduction">Shortage Deduction</option>
                  <option value="Rate Difference">Rate Difference</option>
                  <option value="Quality Rejection">Quality Rejection</option>
                </select>
              </div>

              <!-- 10. STATUS -->
              <div>
                <label for="pm-mgrn-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
                <select id="pm-mgrn-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Verified & Binned" selected>Verified &amp; Binned</option>
                  <option value="Pending Verification">Pending Verification</option>
                  <option value="Approved">Approved</option>
                  <option value="Draft">Draft</option>
                  <option value="Quality Hold">Quality Hold</option>
                </select>
              </div>

              <!-- 11. NARRATION (Full width) -->
              <div class="col-span-1 sm:col-span-2 md:col-span-2">
                <label for="pm-mgrn-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-mgrn-narration" placeholder="Inward receipt notes and physical verification remarks..." value="Packaging materials inward receipt against Purchase Order for export line" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Work Flow - Item Details Fields -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details Fields</h4>
              </div>
              <span class="text-[11px] font-semibold text-[#5E6C84]">All fields marked with <span class="text-[#DE350B] font-bold">*</span> are required</span>
            </div>

            <!-- Item Input Grid Card (4 columns responsive layout) -->
            <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <!-- 1. PRO Number -->
                <div>
                  <label for="pm-mgrni-pro-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PRO NUMBER</label>
                  <input type="text" id="pm-mgrni-pro-no" value="PRO-2026-0819" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 2. Type of Order -->
                <div>
                  <label for="pm-mgrni-order-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TYPE OF ORDER</label>
                  <select id="pm-mgrni-order-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Export Packaging Order" selected>Export Packaging Order</option>
                    <option value="Standard Production Order">Standard Production Order</option>
                    <option value="Seasonal Peak Pack">Seasonal Peak Pack</option>
                    <option value="Sample Trial Order">Sample Trial Order</option>
                  </select>
                </div>

                <!-- 3. Variety * -->
                <div>
                  <label for="pm-mgrni-variety" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VARIETY <span class="text-[#DE350B]">*</span></label>
                  <select id="pm-mgrni-variety" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Vannamei White Shrimp" selected>Vannamei White Shrimp</option>
                    <option value="Black Tiger Shrimp">Black Tiger Shrimp</option>
                    <option value="Sea White Shrimp">Sea White Shrimp</option>
                    <option value="Pink Brown Shrimp">Pink Brown Shrimp</option>
                    <option value="Freshwater Scampi">Freshwater Scampi</option>
                  </select>
                </div>

                <!-- 4. Grade -->
                <div>
                  <label for="pm-mgrni-grade" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GRADE</label>
                  <select id="pm-mgrni-grade" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="16/20">16/20</option>
                    <option value="21/25">21/25</option>
                    <option value="26/30">26/30</option>
                    <option value="31/40" selected>31/40</option>
                    <option value="41/50">41/50</option>
                    <option value="51/60">51/60</option>
                  </select>
                </div>

                <!-- 5. Packing Style -->
                <div>
                  <label for="pm-mgrni-packing-style" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PACKING STYLE</label>
                  <select id="pm-mgrni-packing-style" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="10 X 1 KG Printed Pouch" selected>10 X 1 KG Printed Pouch</option>
                    <option value="6 X 2 KG Master Carton">6 X 2 KG Master Carton</option>
                    <option value="1 X 10 KG Block IQF">1 X 10 KG Block IQF</option>
                    <option value="5 X 2 Lb Retail Zipper Bag">5 X 2 Lb Retail Zipper Bag</option>
                    <option value="10 X 2 Lb Export Master">10 X 2 Lb Export Master</option>
                  </select>
                </div>

                <!-- 6. Process Type -->
                <div>
                  <label for="pm-mgrni-process-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PROCESS TYPE</label>
                  <select id="pm-mgrni-process-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="PDTO (Peeled Deveined Tail-On)" selected>PDTO (Peeled Deveined Tail-On)</option>
                    <option value="HLSO (Headless Shell-On)">HLSO (Headless Shell-On)</option>
                    <option value="PD (Peeled &amp; Deveined)">PD (Peeled &amp; Deveined)</option>
                    <option value="Cooked Tail-On">Cooked Tail-On</option>
                    <option value="EZ Peel">EZ Peel</option>
                  </select>
                </div>

                <!-- 7. Brand -->
                <div>
                  <label for="pm-mgrni-brand" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BRAND</label>
                  <input type="text" id="pm-mgrni-brand" value="Devi Gold" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 8. Size in mm -->
                <div>
                  <label for="pm-mgrni-size-mm" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SIZE IN MM</label>
                  <input type="text" id="pm-mgrni-size-mm" value="650 x 350 x 280 mm" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 9. Available Qty -->
                <div>
                  <label for="pm-mgrni-avail-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAILABLE QTY</label>
                  <input type="number" id="pm-mgrni-avail-qty" value="2500" min="0" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 10. PPO Qty -->
                <div>
                  <label for="pm-mgrni-ppo-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PPO QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="pm-mgrni-ppo-qty" value="20000" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 11. Received Qty -->
                <div>
                  <label for="pm-mgrni-rec-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">RECEIVED QTY <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="pm-mgrni-rec-qty" value="20000" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 12. Deviation Qty -->
                <div>
                  <label for="pm-mgrni-dev-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEVIATION QTY</label>
                  <input type="number" id="pm-mgrni-dev-qty" value="0" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 13. Location -->
                <div>
                  <label for="pm-mgrni-location" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION</label>
                  <select id="pm-mgrni-location" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="Packaging Store Vault #1" selected>Packaging Store Vault #1</option>
                    <option value="Central PM Bay A-2">Central PM Bay A-2</option>
                    <option value="Cold Storage Packaging Rack B">Cold Storage Packaging Rack B</option>
                    <option value="General Warehouse PM Shelf 3">General Warehouse PM Shelf 3</option>
                  </select>
                </div>

                <!-- 14. Batch -->
                <div>
                  <label for="pm-mgrni-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH</label>
                  <input type="text" id="pm-mgrni-batch" value="BAT-PM-2026-03" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 15. Item Price -->
                <div>
                  <label for="pm-mgrni-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹) <span class="text-[#DE350B]">*</span></label>
                  <input type="number" id="pm-mgrni-price" value="58.50" step="0.01" min="0" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 16. Base Value -->
                <div>
                  <label for="pm-mgrni-base-val" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                  <input type="number" id="pm-mgrni-base-val" value="1170000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 17. Deviation Amount -->
                <div>
                  <label for="pm-mgrni-dev-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEVIATION AMOUNT (₹)</label>
                  <input type="number" id="pm-mgrni-dev-amt" value="0.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#5E6C84] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 18. GST % -->
                <div>
                  <label for="pm-mgrni-gst-pct" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                  <select id="pm-mgrni-gst-pct" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                    <option value="0">0% (Nil)</option>
                    <option value="5">5%</option>
                    <option value="12" selected>12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                <!-- 19. Tax Amount -->
                <div>
                  <label for="pm-mgrni-tax-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TAX AMOUNT (₹)</label>
                  <input type="number" id="pm-mgrni-tax-amt" value="140400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 20. Invoice Amount -->
                <div>
                  <label for="pm-mgrni-inv-amt" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMOUNT (₹)</label>
                  <input type="number" id="pm-mgrni-inv-amt" value="1310400.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
                </div>

                <!-- 21. Purpose -->
                <div>
                  <label for="pm-mgrni-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                  <input type="text" id="pm-mgrni-purpose" value="Commercial export packing batch" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 22. Attachment -->
                <div>
                  <label for="pm-mgrni-attachment" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ATTACHMENT</label>
                  <input type="file" id="pm-mgrni-attachment" class="w-full text-[11px] px-2 py-1 bg-white border border-[#DFE1E6] rounded text-[#5E6C84] focus:outline-none focus:border-[#00A4B7] file:mr-2 file:py-0.5 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg-[#E0F2FE] file:text-[#0284C7] cursor-pointer" />
                </div>

                <!-- 23. Remarks -->
                <div>
                  <label for="pm-mgrni-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                  <input type="text" id="pm-mgrni-remarks" value="Physical count verified; QC seal intact" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
                </div>

                <!-- 24. Action Button (Add Item) -->
                <div>
                  <label class="block text-[11px] font-bold text-transparent uppercase tracking-wider mb-1 select-none">&nbsp;</label>
                  <button type="button" id="modal-pm-grn-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    <span>Add Item</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Staged Items Preview Table Card -->
            <div class="mt-3 overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">PPO Qty</th>
                    <th class="py-2.5 px-3 text-right">Rec Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3 text-right">Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">Tax Amt</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="pm-grn-modal-items-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 3: Summary Calculation Card -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-6">
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Items Count</span>
                <span id="pm-grn-modal-items-count" class="text-sm font-mono font-bold text-[#172B4D]">0</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Base</span>
                <span id="pm-grn-modal-total-base" class="text-sm font-mono font-bold text-[#172B4D]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Deviation</span>
                <span id="pm-grn-modal-total-dev" class="text-sm font-mono font-bold text-[#5E6C84]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Tax</span>
                <span id="pm-grn-modal-total-tax" class="text-sm font-mono font-bold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Net Invoice Value</span>
                <span id="pm-grn-modal-net-inv" class="text-base font-mono font-bold text-[#00875A]">₹0.00</span>
              </div>
            </div>
          </div>
        </form>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Save Goods Receipt Note',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const docNo = modalRoot.querySelector('#pm-mgrn-doc')?.value?.trim();
            const date = modalRoot.querySelector('#pm-mgrn-date')?.value;
            const vendorAccount = modalRoot.querySelector('#pm-mgrn-vendor')?.value;
            const freightType = modalRoot.querySelector('#pm-mgrn-freight-type')?.value;
            const isGst = modalRoot.querySelector('#pm-mgrn-is-gst')?.value;
            const invoiceNumber = modalRoot.querySelector('#pm-mgrn-inv-no')?.value?.trim();
            const invoiceDate = modalRoot.querySelector('#pm-mgrn-inv-date')?.value;
            const creditNoteType = modalRoot.querySelector('#pm-mgrn-credit-type')?.value;
            const status = modalRoot.querySelector('#pm-mgrn-status')?.value;
            const narration = modalRoot.querySelector('#pm-mgrn-narration')?.value?.trim();

            if (!docNo) {
              Toast.show('DOC NO is required', 'error');
              modalRoot.querySelector('#pm-mgrn-doc')?.focus();
              return;
            }
            if (!date) {
              Toast.show('DATE is required', 'error');
              modalRoot.querySelector('#pm-mgrn-date')?.focus();
              return;
            }
            if (!vendorAccount) {
              Toast.show('VENDOR ACCOUNT is required', 'error');
              modalRoot.querySelector('#pm-mgrn-vendor')?.focus();
              return;
            }
            if (!invoiceNumber) {
              Toast.show('INVOICE NUMBER is required', 'error');
              modalRoot.querySelector('#pm-mgrn-inv-no')?.focus();
              return;
            }
            if (grnItems.length === 0) {
              Toast.show('Please add at least one item before saving.', 'warning');
              return;
            }

            const totalInvoice = grnItems.reduce((acc, it) => acc + (it.invoiceAmount || 0), 0);

            // Custom Confirmation Popup
            Modal.confirm({
              title: 'Confirm Save Goods Receipt Note (PM)',
              message: `Are you sure you want to save Goods Receipt Note <strong>${docNo}</strong> for Vendor <strong>${vendorAccount}</strong> (Invoice: <strong>${invoiceNumber}</strong>) with <strong>${grnItems.length} item(s)</strong> totaling <strong>₹${totalInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</strong>?`,
              confirmText: 'Save Goods Receipt Note',
              onConfirm: () => {
                const newRecord = {
                  id: Date.now(),
                  docNo,
                  date,
                  vendor: vendorAccount,
                  vendorAccount,
                  supplier: vendorAccount,
                  freightType,
                  isGst,
                  invoiceNumber,
                  invoiceNo: invoiceNumber,
                  invoiceDate,
                  creditNoteType,
                  status: status || 'Verified & Binned',
                  narration,
                  items: JSON.parse(JSON.stringify(grnItems))
                };

                this.state.pmGrnList.unshift(newRecord);
                Modal.close();
                if (onSuccess) onSuccess();
                Toast.show(`Goods Receipt Note ${docNo} created successfully!`, 'success');
              }
            });
          }
        }
      ]
    });

    renderItemsTable();

    // Live calculation for item entry
    const calcGrnVals = () => {
      const ppoQty = parseFloat(document.getElementById('pm-mgrni-ppo-qty')?.value || 0);
      const recQty = parseFloat(document.getElementById('pm-mgrni-rec-qty')?.value || 0);
      const price = parseFloat(document.getElementById('pm-mgrni-price')?.value || 0);
      const gstPct = parseFloat(document.getElementById('pm-mgrni-gst-pct')?.value || 0);

      const devQty = recQty - ppoQty;
      const baseVal = recQty * price;
      const devAmt = devQty * price;
      const taxAmt = baseVal * (gstPct / 100);
      const invAmt = baseVal + taxAmt;

      const devEl = document.getElementById('pm-mgrni-dev-qty');
      const baseEl = document.getElementById('pm-mgrni-base-val');
      const devAmtEl = document.getElementById('pm-mgrni-dev-amt');
      const taxEl = document.getElementById('pm-mgrni-tax-amt');
      const invEl = document.getElementById('pm-mgrni-inv-amt');

      if (devEl) devEl.value = devQty;
      if (baseEl) baseEl.value = baseVal.toFixed(2);
      if (devAmtEl) devAmtEl.value = devAmt.toFixed(2);
      if (taxEl) taxEl.value = taxAmt.toFixed(2);
      if (invEl) invEl.value = invAmt.toFixed(2);
    };

    ['pm-mgrni-ppo-qty', 'pm-mgrni-rec-qty', 'pm-mgrni-price', 'pm-mgrni-gst-pct'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcGrnVals);
      document.getElementById(id)?.addEventListener('change', calcGrnVals);
    });

    // Add item click
    document.getElementById('modal-pm-grn-btn-add-item')?.addEventListener('click', () => {
      const proNumber = document.getElementById('pm-mgrni-pro-no')?.value?.trim();
      const orderType = document.getElementById('pm-mgrni-order-type')?.value;
      const variety = document.getElementById('pm-mgrni-variety')?.value;
      const grade = document.getElementById('pm-mgrni-grade')?.value;
      const packingStyle = document.getElementById('pm-mgrni-packing-style')?.value;
      const processType = document.getElementById('pm-mgrni-process-type')?.value;
      const brand = document.getElementById('pm-mgrni-brand')?.value?.trim();
      const sizeInMm = document.getElementById('pm-mgrni-size-mm')?.value?.trim();
      const availQty = parseFloat(document.getElementById('pm-mgrni-avail-qty')?.value || 0);
      const ppoQty = parseFloat(document.getElementById('pm-mgrni-ppo-qty')?.value || 0);
      const recQty = parseFloat(document.getElementById('pm-mgrni-rec-qty')?.value || 0);
      const devQty = parseFloat(document.getElementById('pm-mgrni-dev-qty')?.value || 0);
      const location = document.getElementById('pm-mgrni-location')?.value;
      const batch = document.getElementById('pm-mgrni-batch')?.value?.trim();
      const price = parseFloat(document.getElementById('pm-mgrni-price')?.value || 0);
      const baseVal = parseFloat(document.getElementById('pm-mgrni-base-val')?.value || 0);
      const devAmt = parseFloat(document.getElementById('pm-mgrni-dev-amt')?.value || 0);
      const gstPct = parseFloat(document.getElementById('pm-mgrni-gst-pct')?.value || 0);
      const taxAmt = parseFloat(document.getElementById('pm-mgrni-tax-amt')?.value || 0);
      const invAmt = parseFloat(document.getElementById('pm-mgrni-inv-amt')?.value || 0);
      const purpose = document.getElementById('pm-mgrni-purpose')?.value?.trim();
      const remarks = document.getElementById('pm-mgrni-remarks')?.value?.trim();

      if (!variety) {
        Toast.show('Variety is required', 'warning');
        return;
      }
      if (recQty <= 0) {
        Toast.show('Received quantity must be greater than zero', 'warning');
        return;
      }
      if (price <= 0) {
        Toast.show('Item price must be greater than zero', 'warning');
        return;
      }

      grnItems.push({
        proNumber,
        typeOfOrder: orderType,
        variety,
        grade,
        packingStyle,
        processType,
        brand,
        sizeInMm,
        availQty,
        ppoQty,
        receivedQty: recQty,
        deviationQty: devQty,
        location,
        batch,
        itemPrice: price,
        baseValue: baseVal,
        deviationAmount: devAmt,
        gstPercent: gstPct,
        taxAmount: taxAmt,
        invoiceAmount: invAmt,
        purpose,
        attachment: '',
        remarks
      });

      renderItemsTable();
      Toast.show(`Added "${variety}" to GRN items`, 'success');
    });
  },

  // Modal: Edit Packaging Goods Receipt Note
  showEditPmGrnModal(row, onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    let grnItems = Array.isArray(row.items) ? JSON.parse(JSON.stringify(row.items)) : [];

    const recalculateTotals = () => {
      const totalBase = grnItems.reduce((acc, it) => acc + (it.baseValue || 0), 0);
      const totalDevAmt = grnItems.reduce((acc, it) => acc + (it.deviationAmount || 0), 0);
      const totalTax = grnItems.reduce((acc, it) => acc + (it.taxAmount || it.gstTaxAmount || 0), 0);
      const netInvoice = grnItems.reduce((acc, it) => acc + (it.invoiceAmount || 0), 0);

      const itemsCountEl = document.getElementById('pm-grn-edit-items-count');
      const baseEl = document.getElementById('pm-grn-edit-total-base');
      const devEl = document.getElementById('pm-grn-edit-total-dev');
      const taxEl = document.getElementById('pm-grn-edit-total-tax');
      const netEl = document.getElementById('pm-grn-edit-net-inv');

      if (itemsCountEl) itemsCountEl.innerText = grnItems.length;
      if (baseEl) baseEl.innerText = `₹${totalBase.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (devEl) devEl.innerText = `₹${totalDevAmt.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (taxEl) taxEl.innerText = `₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      if (netEl) netEl.innerText = `₹${netInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-grn-edit-items-tbody');
      if (!tbody) return;

      if (grnItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="15" class="text-center py-6 text-[#5E6C84] italic">
              No items in this Goods Receipt Note.
            </td>
          </tr>
        `;
        recalculateTotals();
        return;
      }

      tbody.innerHTML = grnItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
          <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety || it.item || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
          <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
          <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.location || '-'}</td>
          <td class="py-2.5 px-3 font-mono text-[#5E6C84] whitespace-nowrap">${it.batch || '-'}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84] whitespace-nowrap">${Number(it.ppoQty || it.poQty || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.receivedQty || it.quantity || 0).toLocaleString()}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold ${(it.deviationQty || 0) < 0 ? 'text-[#DE350B]' : ((it.deviationQty || 0) > 0 ? 'text-[#00875A]' : 'text-[#5E6C84]')} whitespace-nowrap">${it.deviationQty || 0}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent || 0}%</td>
          <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.taxAmount || it.gstTaxAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmount || (it.baseValue || 0) + (it.taxAmount || it.gstTaxAmount || 0)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2.5 px-3 text-center whitespace-nowrap">
            <button type="button" class="btn-remove-edit-pm-grn-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-remove-edit-pm-grn-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          grnItems.splice(idx, 1);
          renderItemsTable();
        });
      });

      recalculateTotals();
    };

    Modal.open({
      title: `Edit Goods Receipt Note (PM) — ${row.docNo}`,
      size: 'full',
      confirmActions: false,
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Section 1: Header Details -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-[#DFE1E6]">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Goods Receipt Note Header Details</h4>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label for="pm-egrn-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
                <input type="text" id="pm-egrn-doc" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-egrn-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="date" id="pm-egrn-date" value="${row.date || todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-egrn-vendor" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">VENDOR ACCOUNT <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="pm-egrn-vendor" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Sri Venkateswara Packaging Ltd" ${(row.vendor || row.vendorAccount || row.supplier) === 'Sri Venkateswara Packaging Ltd' ? 'selected' : ''}>Sri Venkateswara Packaging Ltd</option>
                  <option value="Apex Polymers & Films India Ltd" ${(row.vendor || row.vendorAccount || row.supplier) === 'Apex Polymers & Films India Ltd' ? 'selected' : ''}>Apex Polymers &amp; Films India Ltd</option>
                  <option value="Modern Corrugators Visakhapatnam" ${(row.vendor || row.vendorAccount || row.supplier) === 'Modern Corrugators Visakhapatnam' ? 'selected' : ''}>Modern Corrugators Visakhapatnam</option>
                  <option value="South Coast Boxes & Cartons" ${(row.vendor || row.vendorAccount || row.supplier) === 'South Coast Boxes & Cartons' ? 'selected' : ''}>South Coast Boxes &amp; Cartons</option>
                  <option value="Delta Polyfilms Corp" ${(row.vendor || row.vendorAccount || row.supplier) === 'Delta Polyfilms Corp' ? 'selected' : ''}>Delta Polyfilms Corp</option>
                </select>
              </div>
              <div>
                <label for="pm-egrn-freight-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FREIGHT TYPE</label>
                <select id="pm-egrn-freight-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Door Delivery (Freight Included)" ${row.freightType === 'Door Delivery (Freight Included)' ? 'selected' : ''}>Door Delivery (Freight Included)</option>
                  <option value="Ex-Works with Paid Transit" ${row.freightType === 'Ex-Works with Paid Transit' ? 'selected' : ''}>Ex-Works with Paid Transit</option>
                  <option value="To Pay (Freight Extra)" ${row.freightType === 'To Pay (Freight Extra)' ? 'selected' : ''}>To Pay (Freight Extra)</option>
                </select>
              </div>
              <div>
                <label for="pm-egrn-is-gst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">IS GST</label>
                <select id="pm-egrn-is-gst" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Yes (Registered GST Invoice)" ${row.isGst === 'Yes (Registered GST Invoice)' ? 'selected' : ''}>Yes (Registered GST Invoice)</option>
                  <option value="No (Non-GST / Exempt)" ${row.isGst === 'No (Non-GST / Exempt)' ? 'selected' : ''}>No (Non-GST / Exempt)</option>
                </select>
              </div>
              <div>
                <label for="pm-egrn-inv-no" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE NUMBER <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="text" id="pm-egrn-inv-no" value="${row.invoiceNumber || row.invoiceNo || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-egrn-inv-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE DATE <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="date" id="pm-egrn-inv-date" value="${row.invoiceDate || todayStr}" class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-egrn-credit-type" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">CREDIT NOTE TYPE</label>
                <select id="pm-egrn-credit-type" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="None" ${row.creditNoteType === 'None' ? 'selected' : ''}>None</option>
                  <option value="Shortage Deduction" ${row.creditNoteType === 'Shortage Deduction' ? 'selected' : ''}>Shortage Deduction</option>
                  <option value="Rate Difference" ${row.creditNoteType === 'Rate Difference' ? 'selected' : ''}>Rate Difference</option>
                  <option value="Quality Rejection" ${row.creditNoteType === 'Quality Rejection' ? 'selected' : ''}>Quality Rejection</option>
                </select>
              </div>
              <div>
                <label for="pm-egrn-status" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">STATUS</label>
                <select id="pm-egrn-status" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Verified & Binned" ${row.status === 'Verified & Binned' ? 'selected' : ''}>Verified &amp; Binned</option>
                  <option value="Pending Verification" ${row.status === 'Pending Verification' ? 'selected' : ''}>Pending Verification</option>
                  <option value="Approved" ${row.status === 'Approved' ? 'selected' : ''}>Approved</option>
                  <option value="Draft" ${row.status === 'Draft' ? 'selected' : ''}>Draft</option>
                  <option value="Quality Hold" ${row.status === 'Quality Hold' ? 'selected' : ''}>Quality Hold</option>
                </select>
              </div>
              <div class="col-span-1 sm:col-span-2 md:col-span-3">
                <label for="pm-egrn-narration" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-egrn-narration" value="${row.narration || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Section 2: Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="p-3 bg-[#F8FAFC] border-b border-[#DFE1E6] flex items-center justify-between">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Goods Receipt Note Items (<span id="pm-grn-edit-items-count">${grnItems.length}</span>)</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">PPO Qty</th>
                    <th class="py-2.5 px-3 text-right">Rec Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3 text-right">Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">Tax Amt</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="pm-grn-edit-items-tbody" class="divide-y divide-[#DFE1E6] text-[#1E293B]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- Section 3: Summary -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-6">
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Base</span>
                <span id="pm-grn-edit-total-base" class="text-sm font-mono font-bold text-[#172B4D]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Deviation</span>
                <span id="pm-grn-edit-total-dev" class="text-sm font-mono font-bold text-[#5E6C84]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Total Tax</span>
                <span id="pm-grn-edit-total-tax" class="text-sm font-mono font-bold text-[#00A4B7]">₹0.00</span>
              </div>
              <div>
                <span class="text-[10px] uppercase font-bold text-[#5E6C84] block">Net Invoice Value</span>
                <span id="pm-grn-edit-net-inv" class="text-base font-mono font-bold text-[#00875A]">₹0.00</span>
              </div>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Cancel',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        },
        {
          label: 'Update Goods Receipt Note',
          type: 'primary',
          class: 'btn-primary border-0 px-6 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all',
          onClick: () => {
            const modalRoot = document.getElementById('erp-modal-root');
            if (!modalRoot) return;

            const date = modalRoot.querySelector('#pm-egrn-date')?.value;
            const vendorAccount = modalRoot.querySelector('#pm-egrn-vendor')?.value;
            const freightType = modalRoot.querySelector('#pm-egrn-freight-type')?.value;
            const isGst = modalRoot.querySelector('#pm-egrn-is-gst')?.value;
            const invoiceNumber = modalRoot.querySelector('#pm-egrn-inv-no')?.value?.trim();
            const invoiceDate = modalRoot.querySelector('#pm-egrn-inv-date')?.value;
            const creditNoteType = modalRoot.querySelector('#pm-egrn-credit-type')?.value;
            const status = modalRoot.querySelector('#pm-egrn-status')?.value;
            const narration = modalRoot.querySelector('#pm-egrn-narration')?.value?.trim();

            if (!date) {
              Toast.show('Date is required', 'error');
              return;
            }
            if (!invoiceNumber) {
              Toast.show('Invoice Number is required', 'error');
              return;
            }

            Modal.confirm({
              title: 'Confirm Update Goods Receipt Note (PM)',
              message: `Are you sure you want to update Goods Receipt Note <strong>${row.docNo}</strong>?`,
              confirmText: 'Update GRN',
              onConfirm: () => {
                row.date = date;
                row.vendor = vendorAccount;
                row.vendorAccount = vendorAccount;
                row.supplier = vendorAccount;
                row.freightType = freightType;
                row.isGst = isGst;
                row.invoiceNumber = invoiceNumber;
                row.invoiceNo = invoiceNumber;
                row.invoiceDate = invoiceDate;
                row.creditNoteType = creditNoteType;
                row.status = status;
                row.narration = narration;
                row.items = JSON.parse(JSON.stringify(grnItems));

                Modal.close();
                if (onSuccess) onSuccess();
                Toast.show(`GRN ${row.docNo} updated successfully!`, 'success');
              }
            });
          }
        }
      ]
    });

    renderItemsTable();
  },

  // Modal: View Packaging GRN Details
  showPmGrnDetailsModal(row) {
    const items = Array.isArray(row.items) ? row.items : [];
    const totalBase = items.reduce((acc, it) => acc + (it.baseValue || 0), 0);
    const totalDevAmt = items.reduce((acc, it) => acc + (it.deviationAmount || 0), 0);
    const totalTax = items.reduce((acc, it) => acc + (it.taxAmount || it.gstTaxAmount || 0), 0);
    const totalNet = items.reduce((acc, it) => acc + (it.invoiceAmount || (it.baseValue || 0) + (it.taxAmount || it.gstTaxAmount || 0)), 0);

    const getStatusBadge = (status) => {
      const s = status || 'Verified & Binned';
      let bg = 'bg-[#E3FCEF] text-[#006644]';
      if (s === 'Pending Verification' || s === 'Draft') bg = 'bg-[#F4F5F7] text-[#42526E]';
      else if (s === 'Quality Hold') bg = 'bg-[#FFF0B3] text-[#172B4D]';
      else if (s === 'Rejected') bg = 'bg-[#FFEBE6] text-[#DE350B]';
      return `<span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${bg} whitespace-nowrap">${s}</span>`;
    };

    Modal.open({
      title: `Goods Receipt Note (PM) Details — ${row.docNo}`,
      size: 'full',
      confirmActions: false,
      content: `
        <div class="space-y-4 text-xs text-[#172B4D]">
          <!-- Summary Header (Clean 4 columns without border/bg) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DATE</span>
              <span class="font-mono font-medium text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">STATUS</span>
              <div>${getStatusBadge(row.status)}</div>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">IS GST</span>
              <span class="text-xs text-[#172B4D] font-semibold">${row.isGst || 'Yes'}</span>
            </div>
            <div class="sm:col-span-2">
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">VENDOR ACCOUNT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.vendor || row.vendorAccount || row.supplier}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">INVOICE NUMBER</span>
              <span class="font-mono font-bold text-xs text-[#172B4D]">${row.invoiceNumber || row.invoiceNo || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">INVOICE DATE</span>
              <span class="font-mono text-xs text-[#172B4D]">${row.invoiceDate || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">FREIGHT TYPE</span>
              <span class="text-xs text-[#172B4D]">${row.freightType || '-'}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">CREDIT NOTE TYPE</span>
              <span class="text-xs text-[#172B4D] font-semibold">${row.creditNoteType || 'None'}</span>
            </div>
            ${row.narration ? `
              <div class="col-span-2 sm:col-span-4 border-t border-[#DFE1E6] pt-2 mt-1">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">NARRATION</span>
                <span class="text-xs text-[#172B4D] font-medium">${row.narration}</span>
              </div>
            ` : ''}
          </div>

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#DFE1E6]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Work Flow - Item Details (${items.length})</h4>
            </div>
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">PRO Number</th>
                    <th class="py-2.5 px-3">Variety</th>
                    <th class="py-2.5 px-3">Grade</th>
                    <th class="py-2.5 px-3">Packing Style</th>
                    <th class="py-2.5 px-3">Location</th>
                    <th class="py-2.5 px-3">Batch</th>
                    <th class="py-2.5 px-3 text-right">PPO Qty</th>
                    <th class="py-2.5 px-3 text-right">Rec Qty</th>
                    <th class="py-2.5 px-3 text-right">Dev Qty</th>
                    <th class="py-2.5 px-3 text-right">Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">GST %</th>
                    <th class="py-2.5 px-3 text-right">Tax Amt</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6]">
                  ${items.map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2.5 px-3 font-mono font-semibold text-[#00A4B7] whitespace-nowrap">${it.proNumber || '-'}</td>
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D] whitespace-nowrap">${it.variety || it.item || '-'}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.grade || '-'}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${it.packingStyle || '-'}</td>
                      <td class="py-2.5 px-3 text-[#172B4D] whitespace-nowrap">${it.location || '-'}</td>
                      <td class="py-2.5 px-3 font-mono text-[#5E6C84] whitespace-nowrap">${it.batch || '-'}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#5E6C84] whitespace-nowrap">${Number(it.ppoQty || it.poQty || 0).toLocaleString()}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">${Number(it.receivedQty || it.quantity || 0).toLocaleString()}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold ${(it.deviationQty || 0) < 0 ? 'text-[#DE350B]' : ((it.deviationQty || 0) > 0 ? 'text-[#00875A]' : 'text-[#5E6C84]')} whitespace-nowrap">${it.deviationQty || 0}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#172B4D] whitespace-nowrap">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D] whitespace-nowrap">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">${it.gstPercent || 0}%</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7] whitespace-nowrap">₹${Number(it.taxAmount || it.gstTaxAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A] whitespace-nowrap">₹${Number(it.invoiceAmount || (it.baseValue || 0) + (it.taxAmount || it.gstTaxAmount || 0)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    </tr>
                  `).join('')}
                </tbody>
                <tfoot class="bg-[#F8FAFC] border-t border-[#DFE1E6] font-bold text-xs">
                  <tr>
                    <td colspan="10" class="py-2.5 px-3 text-right text-[#5E6C84] uppercase">Total Valuation:</td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#172B4D]">₹${totalBase.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td></td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#00A4B7]">Tax: ₹${totalTax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#00875A]">₹${totalNet.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });
  },

  // =========================================================================
  // 2d. MATERIAL ISSUE (PM)
  // =========================================================================
  renderPackingMaterialMaterialIssue(container) {
    const todayStr = new Date().toISOString().slice(0, 10);

    container.innerHTML = `
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Material Issue (PM)</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="pm-issue-add-btn" class="btn-primary px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            <span>Add Material Issue</span>
          </button>
        </div>
      </div>

      <!-- Search & Filter Card -->
      <div class="dt-top-filter-card bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs mb-3 transition-all duration-200">
        <div class="flex items-center justify-between pb-1">
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            <h3 class="text-xs font-bold text-[#172B4D]">Search &amp; Filters</h3>
          </div>
          <div class="inline-flex items-center gap-2">
            <button type="button" id="pm-issue-flt-reset-btn" class="dt-action-btn dt-top-filter-reset-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Reset all filters">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </button>
            <button type="button" id="pm-issue-flt-toggle-btn" class="dt-action-btn dt-top-filter-toggle-btn w-8 h-8 min-w-[32px] min-h-[32px] inline-flex items-center justify-center bg-white hover:bg-[#F0F9FF] border border-[#CBD5E1] hover:border-[#00A4B7] text-[#334155] hover:text-[#00A4B7] rounded-full transition-colors cursor-pointer select-none" title="Hide Filter">
              <svg id="pm-issue-flt-toggle-icon" class="w-3.5 h-3.5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>
        </div>

        <div id="pm-issue-flt-body" class="dt-top-filter-body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-3 border-t border-[#F1F5F9] mt-2 text-xs">
          <!-- 1. Search Query -->
          <div>
            <label for="pm-issue-flt-search" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">SEARCH</label>
            <input type="text" id="pm-issue-flt-search" placeholder="Doc No / Item / Narration..." class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 2. Department -->
          <div>
            <label for="pm-issue-flt-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT</label>
            <select id="pm-issue-flt-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
              <option value="ALL">All Departments</option>
              <option value="Packaging & Boxing Bay">Packaging &amp; Boxing Bay</option>
              <option value="IQF Line 1 Packing Table">IQF Line 1 Packing Table</option>
              <option value="Coldstore Hub - Dispatch Packaging">Coldstore Hub - Dispatch Packaging</option>
              <option value="Pre-Processing Unit">Pre-Processing Unit</option>
            </select>
          </div>

          <!-- 3. From Date -->
          <div>
            <label for="pm-issue-flt-from" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">FROM DATE</label>
            <input type="date" id="pm-issue-flt-from" value="2026-10-01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- 4. To Date -->
          <div>
            <label for="pm-issue-flt-to" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">TO DATE</label>
            <input type="date" id="pm-issue-flt-to" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
          </div>

          <!-- Search Button -->
          <div class="flex items-end">
            <button type="button" id="pm-issue-flt-search-btn" class="dt-top-filter-search-btn btn-primary px-5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer h-[32px] w-auto">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Material Issue Records Table: S No, Date, Actions (plus Doc No, Dept, Location, Amount) -->
      <div id="pm-issue-table-container"></div>
    `;

    // Add Material Issue button handler
    container.querySelector('#pm-issue-add-btn')?.addEventListener('click', () => {
      this.showAddPmMaterialIssueModal(() => {
        renderTable(this.state.pmMaterialIssueList);
      });
    });

    const renderTable = (data) => {
      new DataTable({
        containerId: 'pm-issue-table-container',
        tableTitle: `Packaging Material Issue Records (${data.length})`,
        searchable: true,
        exportable: true,
        pageSize: 10,
        onRowClick: (row) => {
          this.showPmMaterialIssueDetailsModal(row);
        },
        columns: [
          {
            field: 'sNo',
            header: 'S No',
            sortable: true,
            render: (v, r, idx) => `
              <span class="text-[#00A4B7] font-semibold hover:underline cursor-pointer select-none">${idx + 1}</span>
            `
          },
          {
            field: 'docNo',
            header: 'Doc No',
            sortable: true,
            render: (v, r) => `
              <span class="font-mono font-bold text-xs text-[#00A4B7] hover:underline cursor-pointer whitespace-nowrap">${v}</span>
            `
          },
          {
            field: 'date',
            header: 'Date',
            sortable: true,
            render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>`
          },
          {
            field: 'department',
            header: 'Department',
            sortable: true,
            render: v => `<span class="font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>`
          },
          {
            field: 'location',
            header: 'Location',
            sortable: true,
            render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v || '-'}</span>`
          },
          {
            field: 'totalValue',
            header: 'Total Value (₹)',
            sortable: true,
            render: (v, r) => {
              const items = Array.isArray(r.items) ? r.items : [];
              const total = items.reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);
              return `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>`;
            }
          }
        ],
        actionsTitle: 'Actions',
        actions: [
          {
            label: 'View',
            title: 'View Issue Details',
            icon: `<svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
            onClick: (row) => {
              this.showPmMaterialIssueDetailsModal(row);
            }
          },
          {
            label: 'Edit',
            title: 'Edit Material Issue',
            icon: `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
            onClick: (row) => {
              this.showEditPmMaterialIssueModal(row, () => {
                renderTable(this.state.pmMaterialIssueList);
              });
            }
          },
          {
            label: 'Delete',
            title: 'Delete Material Issue',
            icon: `<svg class="w-4 h-4 text-[#DE350B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
            onClick: (row) => {
              Modal.confirm({
                title: 'Delete Material Issue (PM)',
                message: `Are you sure you want to delete Packaging Material Issue <strong>${row.docNo}</strong> (${row.department})?`,
                confirmText: 'Delete Issue',
                isDestructive: true,
                onConfirm: () => {
                  const idx = this.state.pmMaterialIssueList.findIndex(r => r.id === row.id || r.docNo === row.docNo);
                  if (idx !== -1) {
                    this.state.pmMaterialIssueList.splice(idx, 1);
                    renderTable(this.state.pmMaterialIssueList);
                    Toast.show(`Material Issue ${row.docNo} deleted.`, 'success');
                  }
                }
              });
            }
          }
        ],
        data: data
      });
    };

    renderTable(this.state.pmMaterialIssueList);

    // Search & Filter Handlers
    container.querySelector('#pm-issue-flt-search-btn')?.addEventListener('click', () => {
      const q = container.querySelector('#pm-issue-flt-search')?.value?.trim().toLowerCase();
      const deptVal = container.querySelector('#pm-issue-flt-dept')?.value;
      const fromVal = container.querySelector('#pm-issue-flt-from')?.value;
      const toVal = container.querySelector('#pm-issue-flt-to')?.value;

      const filtered = this.state.pmMaterialIssueList.filter(it => {
        if (q) {
          const matchDoc = it.docNo?.toLowerCase().includes(q);
          const matchNarr = it.narration?.toLowerCase().includes(q);
          const matchItem = it.items?.some(i => i.item?.toLowerCase().includes(q));
          if (!matchDoc && !matchNarr && !matchItem) return false;
        }
        if (deptVal && deptVal !== 'ALL' && it.department !== deptVal) return false;
        if (fromVal && it.date < fromVal) return false;
        if (toVal && it.date > toVal) return false;
        return true;
      });

      renderTable(filtered);
      Toast.show(`Found ${filtered.length} matching material issue(s)`, 'info');
    });

    container.querySelector('#pm-issue-flt-reset-btn')?.addEventListener('click', () => {
      container.querySelector('#pm-issue-flt-search').value = '';
      container.querySelector('#pm-issue-flt-dept').value = 'ALL';
      container.querySelector('#pm-issue-flt-from').value = '2026-10-01';
      container.querySelector('#pm-issue-flt-to').value = todayStr;
      renderTable(this.state.pmMaterialIssueList);
      Toast.show('Material Issue filters reset to default', 'info');
    });

    const issueFilterBody = container.querySelector('#pm-issue-flt-body');
    const issueToggleIcon = container.querySelector('#pm-issue-flt-toggle-icon');
    container.querySelector('#pm-issue-flt-toggle-btn')?.addEventListener('click', () => {
      if (issueFilterBody) {
        issueFilterBody.classList.toggle('hidden');
        if (issueToggleIcon) {
          issueToggleIcon.classList.toggle('rotate-180');
        }
      }
    });
  },

  // Modal: Add Packaging Material Issue
  showAddPmMaterialIssueModal(onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const nextNum = (this.state.pmMaterialIssueList?.length || 0) + 1;
    const defaultDocNo = `ISS-PM-2026-${String(30 + nextNum).padStart(4, '0')}`;

    let issueItems = [
      {
        item: '7-Ply Corrugated Master Cartons (1 X 10 KGS IQF Print)',
        uom: 'MCs',
        availableQty: 25000,
        batch: 'BAT-PM-2026-01',
        quantity: 1500,
        itemPrice: 58.50,
        baseValue: 87750.00,
        gstPercent: 12,
        invoiceAmount: 98280.00,
        purpose: 'Shift export carton packing run',
        attachment: '',
        remarks: 'Approved per indent'
      }
    ];

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-issue-modal-items-tbody');
      if (!tbody) return;

      if (issueItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="8" class="text-center py-5 text-[#5E6C84] italic">
              No items added to this issue yet. Fill item details above and click "Add Item".
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = issueItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.uom}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(it.quantity || 0).toLocaleString()}</td>
          <td class="py-2 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
          <td class="py-2 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2 px-3 text-[#5E6C84] text-[11px]">${it.purpose || '-'}</td>
          <td class="py-2 px-3 text-center">
            <button type="button" class="btn-remove-pm-issue-item text-[#DE350B] hover:text-[#BF2600] p-1 rounded hover:bg-[#FFEBE6] transition-colors cursor-pointer" data-idx="${idx}" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.btn-remove-pm-issue-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
          issueItems.splice(idx, 1);
          renderItemsTable();
        });
      });
    };

    Modal.open({
      title: 'Add Material Issue (PM)',
      width: 'max-w-5xl',
      confirmActions: false,
      body: `
        <div class="space-y-4 text-xs">
          <!-- 1. Header Information -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider border-b border-[#DFE1E6] pb-1.5">Material Issue Header Details</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label for="pm-missue-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
                <input type="text" id="pm-missue-doc" value="${defaultDocNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-missue-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="date" id="pm-missue-date" value="${todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-missue-loc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="pm-missue-loc" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Packaging Store Vault #1" selected>Packaging Store Vault #1</option>
                  <option value="Central PM Bay A-2">Central PM Bay A-2</option>
                  <option value="Master Carton Storage Unit">Master Carton Storage Unit</option>
                </select>
              </div>
              <div>
                <label for="pm-missue-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="pm-missue-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Packaging & Boxing Bay" selected>Packaging &amp; Boxing Bay</option>
                  <option value="IQF Line 1 Packing Table">IQF Line 1 Packing Table</option>
                  <option value="Coldstore Hub - Dispatch Packaging">Coldstore Hub - Dispatch Packaging</option>
                  <option value="Pre-Processing Unit">Pre-Processing Unit</option>
                </select>
              </div>
              <div class="sm:col-span-2 md:col-span-4">
                <label for="pm-missue-narr" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-missue-narr" placeholder="Department consumption or requisition note..." value="Issue of master cartons for shift packing target" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- 2. Item Details Fields -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider border-b border-[#DFE1E6] pb-1.5">Item Issuance Details</h4>
            
            <!-- Row 1: Item, Unit, Avail, Price, Batch, Qty -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
              <div class="md:col-span-2">
                <label for="pm-missuei-item" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="text" id="pm-missuei-item" value="Printed LDPE 2-Lb Gusseted Shrimp Bags with Zipper (50 Micron)" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-missuei-uom" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">UOM</label>
                <select id="pm-missuei-uom" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Bags" selected>Bags</option>
                  <option value="MCs">MCs</option>
                  <option value="Boxes">Boxes</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Nos">Nos</option>
                </select>
              </div>
              <div>
                <label for="pm-missuei-avail" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">AVAIL QTY</label>
                <input type="number" id="pm-missuei-avail" value="99500" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-missuei-price" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">ITEM PRICE (₹)</label>
                <input type="number" id="pm-missuei-price" value="3.40" min="0.01" step="0.01" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-missuei-batch" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BATCH</label>
                <input type="text" id="pm-missuei-batch" value="BAT-PM-2026-02" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>

            <!-- Row 2: Qty, Base, GST, Invoice, Purpose, Remarks -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <div>
                <label for="pm-missuei-qty" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">QUANTITY <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="number" id="pm-missuei-qty" value="5000" min="1" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-mono font-bold text-[#00A4B7] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-missuei-base" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">BASE VALUE (₹)</label>
                <input type="number" id="pm-missuei-base" value="17000.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-missuei-gst" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">GST %</label>
                <select id="pm-missuei-gst" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="0">0%</option>
                  <option value="5">5%</option>
                  <option value="12">12%</option>
                  <option value="18" selected>18%</option>
                  <option value="28">28%</option>
                </select>
              </div>
              <div>
                <label for="pm-missuei-inv" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">INVOICE AMOUNT (₹)</label>
                <input type="number" id="pm-missuei-inv" value="20060.00" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono font-bold text-[#00875A] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-missuei-purpose" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">PURPOSE</label>
                <input type="text" id="pm-missuei-purpose" value="Retail pack shrimp packaging" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-missuei-remarks" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">REMARKS</label>
                <input type="text" id="pm-missuei-remarks" value="Standard issue" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>

            <!-- Row 3: Action Button -->
            <div class="flex justify-start">
              <button type="button" id="modal-pm-issue-btn-add-item" class="btn-primary w-full max-w-[150px] h-[32px] px-4 py-1.5 rounded-full text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Add Item</span>
              </button>
            </div>
          </div>

          <!-- 3. Staged Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="p-3 bg-[#F8FAFC] border-b border-[#DFE1E6]">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Items in Material Issue</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UOM</th>
                    <th class="py-2.5 px-3 text-right">Qty</th>
                    <th class="py-2.5 px-3 text-right">Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody id="pm-issue-modal-items-tbody" class="divide-y divide-[#DFE1E6]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- 4. Footer Actions -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex justify-end gap-2">
            <button type="button" id="modal-pm-issue-cancel-btn" class="btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="button" id="modal-pm-issue-submit-btn" class="btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Save Material Issue</span>
            </button>
          </div>
        </div>
      `
    });

    renderItemsTable();

    // Calculations
    const calcIssueVals = () => {
      const qty = parseFloat(document.getElementById('pm-missuei-qty')?.value || 0);
      const price = parseFloat(document.getElementById('pm-missuei-price')?.value || 0);
      const gstPct = parseFloat(document.getElementById('pm-missuei-gst')?.value || 0);

      const baseVal = qty * price;
      const gstAmt = baseVal * (gstPct / 100);
      const invAmt = baseVal + gstAmt;

      const baseEl = document.getElementById('pm-missuei-base');
      const invEl = document.getElementById('pm-missuei-inv');

      if (baseEl) baseEl.value = baseVal.toFixed(2);
      if (invEl) invEl.value = invAmt.toFixed(2);
    };

    ['pm-missuei-qty', 'pm-missuei-price', 'pm-missuei-gst'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', calcIssueVals);
      document.getElementById(id)?.addEventListener('change', calcIssueVals);
    });

    document.getElementById('modal-pm-issue-btn-add-item')?.addEventListener('click', () => {
      const item = document.getElementById('pm-missuei-item')?.value?.trim();
      const uom = document.getElementById('pm-missuei-uom')?.value;
      const avail = parseFloat(document.getElementById('pm-missuei-avail')?.value || 0);
      const price = parseFloat(document.getElementById('pm-missuei-price')?.value || 0);
      const batch = document.getElementById('pm-missuei-batch')?.value;
      const qty = parseFloat(document.getElementById('pm-missuei-qty')?.value || 0);
      const baseVal = parseFloat(document.getElementById('pm-missuei-base')?.value || 0);
      const gstPct = parseFloat(document.getElementById('pm-missuei-gst')?.value || 0);
      const invAmt = parseFloat(document.getElementById('pm-missuei-inv')?.value || 0);
      const purpose = document.getElementById('pm-missuei-purpose')?.value;
      const remarks = document.getElementById('pm-missuei-remarks')?.value;

      if (!item) {
        Toast.show('Please enter item name', 'warning');
        return;
      }
      if (qty <= 0) {
        Toast.show('Quantity must be greater than zero', 'warning');
        return;
      }

      issueItems.push({
        item,
        uom,
        availableQty: avail,
        batch,
        quantity: qty,
        itemPrice: price,
        baseValue: baseVal,
        gstPercent: gstPct,
        invoiceAmount: invAmt,
        purpose,
        attachment: '',
        remarks
      });

      renderItemsTable();
      Toast.show(`Added "${item}" to Material Issue`, 'success');
    });

    document.getElementById('modal-pm-issue-cancel-btn')?.addEventListener('click', () => {
      Modal.close();
    });

    document.getElementById('modal-pm-issue-submit-btn')?.addEventListener('click', () => {
      const docNo = document.getElementById('pm-missue-doc')?.value;
      const date = document.getElementById('pm-missue-date')?.value;
      const location = document.getElementById('pm-missue-loc')?.value;
      const department = document.getElementById('pm-missue-dept')?.value;
      const narration = document.getElementById('pm-missue-narr')?.value;

      if (!date || !location || !department) {
        Toast.show('Please fill in required fields (Date, Location, Department)', 'warning');
        return;
      }
      if (issueItems.length === 0) {
        Toast.show('Please add at least one item to issue', 'warning');
        return;
      }

      Modal.confirm({
        title: 'Confirm Packaging Material Issue',
        message: `Issue materials under <strong>${docNo}</strong> to <strong>${department}</strong> with ${issueItems.length} item(s)?`,
        confirmText: 'Save Issue',
        onConfirm: () => {
          const newIssue = {
            id: Date.now(),
            docNo,
            date,
            location,
            department,
            narration,
            items: [...issueItems]
          };

          this.state.pmMaterialIssueList.unshift(newIssue);
          Modal.close();
          if (onSuccess) onSuccess();
          Toast.show(`Material Issue ${docNo} created successfully!`, 'success');
        }
      });
    });
  },

  // Modal: Edit Packaging Material Issue
  showEditPmMaterialIssueModal(row, onSuccess = null) {
    const todayStr = new Date().toISOString().slice(0, 10);
    let issueItems = Array.isArray(row.items) ? JSON.parse(JSON.stringify(row.items)) : [];

    const renderItemsTable = () => {
      const tbody = document.getElementById('pm-issue-edit-items-tbody');
      if (!tbody) return;

      if (issueItems.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="text-center py-5 text-[#5E6C84] italic">
              No items in this issue.
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = issueItems.map((it, idx) => `
        <tr class="hover:bg-[#F8FAFC]">
          <td class="py-2 px-3 font-semibold text-[#172B4D]">${it.item}</td>
          <td class="py-2 px-3 text-[#5E6C84]">${it.uom || it.unit || 'Nos'}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(it.quantity || 0).toLocaleString()}</td>
          <td class="py-2 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
          <td class="py-2 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
          <td class="py-2 px-3 text-[#5E6C84] text-[11px]">${it.purpose || '-'}</td>
        </tr>
      `).join('');
    };

    Modal.open({
      title: `Edit Material Issue (PM) — ${row.docNo}`,
      width: 'max-w-4xl',
      confirmActions: false,
      body: `
        <div class="space-y-4 text-xs">
          <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 space-y-3 shadow-2xs">
            <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider border-b border-[#DFE1E6] pb-1.5">Material Issue Header Details</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label for="pm-eissue-doc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DOC NO</label>
                <input type="text" id="pm-eissue-doc" value="${row.docNo}" readonly class="w-full text-xs px-2.5 py-1.5 bg-[#F4F5F7] border border-[#DFE1E6] rounded font-mono font-bold text-[#172B4D] shadow-2xs cursor-not-allowed" />
              </div>
              <div>
                <label for="pm-eissue-date" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DATE <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="date" id="pm-eissue-date" value="${row.date || todayStr}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-eissue-loc" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">LOCATION <span class="text-[#DE350B] font-bold">*</span></label>
                <input type="text" id="pm-eissue-loc" value="${row.location || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
              <div>
                <label for="pm-eissue-dept" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">DEPARTMENT <span class="text-[#DE350B] font-bold">*</span></label>
                <select id="pm-eissue-dept" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-semibold text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs">
                  <option value="Packaging & Boxing Bay" ${row.department === 'Packaging & Boxing Bay' ? 'selected' : ''}>Packaging &amp; Boxing Bay</option>
                  <option value="IQF Line 1 Packing Table" ${row.department === 'IQF Line 1 Packing Table' ? 'selected' : ''}>IQF Line 1 Packing Table</option>
                  <option value="Coldstore Hub - Dispatch Packaging" ${row.department === 'Coldstore Hub - Dispatch Packaging' ? 'selected' : ''}>Coldstore Hub - Dispatch Packaging</option>
                  <option value="Pre-Processing Unit" ${row.department === 'Pre-Processing Unit' ? 'selected' : ''}>Pre-Processing Unit</option>
                </select>
              </div>
              <div class="sm:col-span-2 md:col-span-4">
                <label for="pm-eissue-narr" class="block text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider mb-1">NARRATION</label>
                <input type="text" id="pm-eissue-narr" value="${row.narration || ''}" class="w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded font-medium text-[#172B4D] focus:outline-none focus:border-[#00A4B7] shadow-2xs" />
              </div>
            </div>
          </div>

          <!-- Items Table Card -->
          <div class="bg-white border border-[#DFE1E6] rounded-xl overflow-hidden shadow-2xs">
            <div class="p-3 bg-[#F8FAFC] border-b border-[#DFE1E6]">
              <span class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issued Items</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UOM</th>
                    <th class="py-2.5 px-3 text-right">Qty</th>
                    <th class="py-2.5 px-3 text-right">Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3">Purpose</th>
                  </tr>
                </thead>
                <tbody id="pm-issue-edit-items-tbody" class="divide-y divide-[#DFE1E6]">
                </tbody>
              </table>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3 flex justify-end gap-2">
            <button type="button" id="modal-pm-eissue-cancel-btn" class="btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer">
              Cancel
            </button>
            <button type="button" id="modal-pm-eissue-submit-btn" class="btn-primary border-0 px-6 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Update Material Issue</span>
            </button>
          </div>
        </div>
      `
    });

    renderItemsTable();

    document.getElementById('modal-pm-eissue-cancel-btn')?.addEventListener('click', () => {
      Modal.close();
    });

    document.getElementById('modal-pm-eissue-submit-btn')?.addEventListener('click', () => {
      const date = document.getElementById('pm-eissue-date')?.value;
      const location = document.getElementById('pm-eissue-loc')?.value;
      const department = document.getElementById('pm-eissue-dept')?.value;
      const narration = document.getElementById('pm-eissue-narr')?.value;

      if (!date || !location || !department) {
        Toast.show('Please fill in required fields', 'warning');
        return;
      }

      Modal.confirm({
        title: 'Confirm Update Material Issue',
        message: `Update changes to Packaging Material Issue <strong>${row.docNo}</strong>?`,
        confirmText: 'Confirm Update',
        onConfirm: () => {
          row.date = date;
          row.location = location;
          row.department = department;
          row.narration = narration;

          Modal.close();
          if (onSuccess) onSuccess();
          Toast.show(`Material Issue ${row.docNo} updated successfully!`, 'success');
        }
      });
    });
  },

  // Modal: View Packaging Material Issue Details
  showPmMaterialIssueDetailsModal(row) {
    const items = Array.isArray(row.items) ? row.items : [];
    const totalValue = items.reduce((acc, it) => acc + (it.invoiceAmount || it.baseValue || 0), 0);

    Modal.open({
      title: `Material Issue (PM) Details — ${row.docNo}`,
      width: 'max-w-4xl',
      body: `
        <div class="space-y-4 text-xs">
          <!-- Header Details -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAFC] border border-[#DFE1E6] rounded-xl p-3.5">
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DOC NO</span>
              <span class="font-mono font-bold text-xs text-[#00A4B7]">${row.docNo}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DATE</span>
              <span class="font-mono font-medium text-xs text-[#172B4D]">${row.date}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">DEPARTMENT</span>
              <span class="font-semibold text-xs text-[#172B4D]">${row.department}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">LOCATION</span>
              <span class="text-xs text-[#5E6C84] font-medium">${row.location || '-'}</span>
            </div>
            ${row.narration ? `
              <div class="col-span-2 sm:col-span-4 border-t border-[#DFE1E6] pt-2 mt-1">
                <span class="text-[10px] font-bold text-[#5E6C84] uppercase tracking-wider block">NARRATION</span>
                <span class="text-xs text-[#172B4D] font-medium">${row.narration}</span>
              </div>
            ` : ''}
          </div>

          <!-- Items Table -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#DFE1E6]">
              <h4 class="text-xs font-bold text-[#172B4D] uppercase tracking-wider">Issued Items (${items.length})</h4>
            </div>
            <div class="overflow-x-auto border border-[#DFE1E6] rounded-xl bg-white shadow-2xs">
              <table class="w-full text-left text-xs border-collapse">
                <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th class="py-2.5 px-3">Item</th>
                    <th class="py-2.5 px-3">UOM</th>
                    <th class="py-2.5 px-3 text-right">Qty</th>
                    <th class="py-2.5 px-3 text-right">Item Price</th>
                    <th class="py-2.5 px-3 text-right">Base Value</th>
                    <th class="py-2.5 px-3 text-right">Invoice Amt</th>
                    <th class="py-2.5 px-3">Purpose</th>
                    <th class="py-2.5 px-3 text-center">Batch</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#DFE1E6]">
                  ${items.map(it => `
                    <tr class="hover:bg-[#F8FAFC]">
                      <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${it.item}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84]">${it.uom || it.unit || 'Nos'}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#172B4D]">${Number(it.quantity || 0).toLocaleString()}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.itemPrice || 0).toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-[#172B4D]">₹${Number(it.baseValue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-right font-mono font-bold text-[#00875A]">₹${Number(it.invoiceAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                      <td class="py-2.5 px-3 text-[#5E6C84] text-[11px]">${it.purpose || '-'}</td>
                      <td class="py-2.5 px-3 text-center text-[#5E6C84] font-mono text-[11px]">${it.batch || '-'}</td>
                    </tr>
                  `).join('')}
                </tbody>
                <tfoot class="bg-[#F8FAFC] border-t border-[#DFE1E6] font-bold text-xs">
                  <tr>
                    <td colspan="5" class="py-2.5 px-3 text-right text-[#5E6C84] uppercase">Total Value Issued:</td>
                    <td class="py-2.5 px-3 text-right font-mono text-[#00875A]">₹${totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                    <td colspan="2"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      `,
      footerButtons: [
        {
          label: 'Close',
          type: 'secondary',
          class: 'btn-secondary border border-[#CBD5E1] px-5 py-2 rounded-full text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-all cursor-pointer',
          onClick: () => Modal.close()
        }
      ]
    });
  },

  // =========================================================================
  // 3. INVENTORY: PROFORMA REGISTER
  // =========================================================================
  renderInventoryProformaRegister(container) {
    const fullList = [...this.state.proformaRegisterList];
    const totalValuation = fullList.reduce((acc, it) => acc + (it.totalInvoiced || 0), 0);

    container.innerHTML = `
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 class="text-xl font-extrabold text-[#172B4D] tracking-tight">Inventory — Proforma Register</h1>
          <p class="text-xs text-[#5E6C84] mt-0.5">Central register of proforma records, stock allocations, and valuation ledger</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Register Entries</span>
          <div class="text-xl font-extrabold text-[#172B4D] mt-1 font-mono">${fullList.length}</div>
          <span class="text-[10px] text-[#0284C7] font-semibold">Ledger Records</span>
        </div>
        <div class="bg-white border border-[#DFE1E6] rounded-xl p-3.5 shadow-2xs">
          <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider block">Total Proforma Value</span>
          <div class="text-xl font-extrabold text-[#00875A] mt-1 font-mono">₹${(totalValuation / 100000).toFixed(2)} L</div>
          <span class="text-[10px] text-[#00875A] font-semibold">Audited Book Stock</span>
        </div>
      </div>

      <div id="proforma-register-table-container"></div>
    `;

    new DataTable({
      containerId: 'proforma-register-table-container',
      tableTitle: `Proforma Register Ledger (${fullList.length})`,
      searchable: true,
      exportable: true,
      pageSize: 10,
      columns: [
        { field: 'sNo', header: 'S.No', render: (v, r, idx) => `<span class="text-[#5E6C84] font-semibold">${idx + 1}</span>` },
        { field: 'regCode', header: 'Register Code', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00A4B7] whitespace-nowrap">${v}</span>` },
        { field: 'refDoc', header: 'Ref Doc / PI', sortable: true, render: v => `<span class="font-mono font-semibold text-xs text-[#172B4D] whitespace-nowrap">${v}</span>` },
        { field: 'regDate', header: 'Date', sortable: true, render: v => `<span class="whitespace-nowrap text-xs text-[#172B4D] font-medium font-mono">${v}</span>` },
        { field: 'category', header: 'Category', sortable: true, render: v => `<span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F4F5F7] text-[#172B4D] border border-[#DFE1E6] whitespace-nowrap">${v}</span>` },
        { field: 'itemDescription', header: 'Description', render: v => `<span class="font-semibold text-xs text-[#172B4D]">${v}</span>` },
        { field: 'storeLocation', header: 'Store Location', sortable: true, render: v => `<span class="text-xs text-[#5E6C84] whitespace-nowrap">${v}</span>` },
        { field: 'quantity', header: 'Quantity', sortable: true, render: (v, r) => `<span class="font-mono font-bold text-xs text-[#172B4D] whitespace-nowrap">${Number(v).toLocaleString()} ${r.unit}</span>` },
        { field: 'totalInvoiced', header: 'Invoiced (₹)', sortable: true, render: v => `<span class="font-mono font-bold text-xs text-[#00875A] whitespace-nowrap">₹${Number(v).toLocaleString()}</span>` }
      ],
      data: fullList
    });
  }
};
