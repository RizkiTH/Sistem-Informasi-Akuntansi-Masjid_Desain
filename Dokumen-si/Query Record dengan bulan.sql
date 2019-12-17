SELECT MONTH(tanggal), SUM(nominal)
FROM tr12_penerimaan_terikat_pending

GROUP BY MONTH(tanggal)